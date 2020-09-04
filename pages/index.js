import Head from "next/head";
import Header from "../components/Header";
import {Col, List, Row} from "antd";
import React, {useState} from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import axios from 'axios';
import Link from 'next/link'
import "../static/style/pages/index.scss";
import servicePath from '../config/apiUrl'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

export default function Home({data}) {
    const [mylist, setMylist] = useState(data,
        []
    );

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Header/>

            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <List
                            header={<div>最新日志</div>}
                            itemLayout="vertical"
                            dataSource={mylist}
                            renderItem={(item) => (
                                <List.Item>
                                    <div className="list-title"><Link
                                        href={{pathname: '/details', query: {id: item.id}}}><a>{item.title}</a></Link>
                                    </div>
                                    <div className="list-icon">
                                        <span className="list-item">
                                          <Icon type="Calender"/>
                                          <div className="text">{item.addTime}</div>
                                        </span>
                                        <span className="list-item">
                                          <Icon type="Folder"/>
                                          <div className="text"> {item.typeName}</div>
                                        </span>
                                        <span className="list-item">
                                          <Icon type="Fire"/>
                                          <div className="text">{item.view_count}次</div>
                                        </span>
                                    </div>
                                    <div className="list-context"
                                         dangerouslySetInnerHTML={{__html: marked(item.introduce)}}/>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                </Col>
            </Row>
            <Footer/>
        </div>
    );
}

Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleList).then(
            (res) => {
                resolve(res.data)
            }
        )
    })
    return await promise
}
