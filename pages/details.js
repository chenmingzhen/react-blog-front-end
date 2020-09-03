import React from "react";
import Head from "next/head";
import { Affix, Breadcrumb, Col, Row } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import MarkNav from "markdown-navbar";
import axios from "axios";
import "markdown-navbar/dist/navbar.css";
import "../static/style/pages/detail.scss";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from '../components/tocify.tsx';

const Detailed = ({ article_content }) => {


  const tocify = new Tocify()
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer:renderer,
    gfm:true,
    pedantic:false,
    sanitize:false,
    tables:true,
    breaks:false,
    smartLists:true,
    highlight:function(code){
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(article_content);

  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col
          className="comm-left"
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
          style={{ backgroundColor: "white" }}
        >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">Blog开发</div>
              <div className="list-icon center">
                <span className="list-item">
                  <Icon type="Calender" />
                  <div className="text">2020-9-2</div>
                </span>
                <span className="list-item">
                  <Icon type="Folder"></Icon>
                  <div className="text">技术</div>
                </span>
                <span className="list-item">
                  <Icon type="Fire"></Icon>
                  <div className="text">1次</div>
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={30}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Detailed.getInitialProps = async (context) => {
  const id = context.query.id;
  const promise = new Promise((resolve) => {
    axios("http://127.0.0.1:7001/default/getArticleById/" + id).then((res) => {
      resolve(res.data.data[0]);
    });
  });

  return await promise;
};

export default Detailed;
