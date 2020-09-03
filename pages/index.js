import Head from "next/head";
import Header from "../components/Header";
import {Row, Col, List} from "antd";
import React, {useState} from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import axios from 'axios';
import Link from 'next/link'
import "../static/style/pages/index.scss";


export default function Home({data}) {
    const [mylist, setMylist] = useState(data,
        []
    );
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
                                    <div className="list-context">{item.introduce}</div>
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
        axios('http://127.0.0.1:7001/default/getArticleList').then(
            (res) => {
                console.log('远程获取数据结果:', res.data)
                resolve(res.data)
            }
        )
    })
    return await promise
}
