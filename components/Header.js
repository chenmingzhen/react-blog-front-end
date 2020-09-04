import React, {useCallback, useEffect, useState} from 'react'
import {Col, Menu, Row} from "antd";
import {CodeSandboxCircleFilled, HeartFilled, HomeFilled,} from "@ant-design/icons";
import "../static/style/components/header.scss";
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navArray, setNavArray] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, []);

    const handleClick = (id) => {
        if (id === 1) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + id)
        }
    }

    const renderIcon = useCallback((id) => {
        if (id === 1) {
            return (<HomeFilled style={{"fontSize": "1.4rem"}}/>)
        } else if (id === 2) {
            return (<CodeSandboxCircleFilled style={{"fontSize": "1.4rem"}}/>)
        } else {
            return (<HeartFilled style={{"fontSize": "1.4rem"}}/>)
        }
    }, [])

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12} className="logo">
                    <Link href={{pathname: '/'}}>
                        <a>
                            <img src="../static/img/logo.png"/>
                            <span className="header-logo">Ethan</span>
                            <span className="header-txt">一万小时定律</span>
                        </a>
                    </Link>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        {
                            navArray.map((item,index) => {
                                return (
                                    <Menu.Item key={index} onClick={() => {
                                        handleClick(item.id)
                                    }}>
                                        {
                                            renderIcon(item.id)
                                        }
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
};

export default Header;
