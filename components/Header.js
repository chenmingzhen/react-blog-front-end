import React from "react";
import { Row, Col, Menu } from "antd";
import {
  HomeFilled,
  CodeSandboxCircleFilled,
  HeartFilled,
} from "@ant-design/icons";
import "../static/style/components/header.scss";
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12} className="logo">
        <img src="../static/img/logo.png"></img>
        <span className="header-logo">Ethan</span>
        <span className="header-txt">一万小时定律</span>
      </Col>

      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <HomeFilled style={{"fontSize":"1.4rem"}}/>
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <CodeSandboxCircleFilled style={{"fontSize":"1.4rem"}}/>
            技术
          </Menu.Item>
          <Menu.Item key="life">
            <HeartFilled style={{"fontSize":"1.4rem"}}/>
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
