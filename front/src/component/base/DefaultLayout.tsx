import {FC, ReactChild, ReactChildren} from "react";
import Header from "./Header"
import Footer from "./Footer";
import Banner from "../mainPage/Banner";
import {Layout, Row, Col} from "antd";
import Navigation from "../mainPage/Navigation";

const {Content} = Layout;


interface AuxProps {
    children: ReactChild | ReactChildren;
}

const DefaultLayout = ({children}: AuxProps) => {
    return (
        <>
            <Row>
                <Col md={2} sm={2} xs={0}/>
                <Col md={20} sm={20} xs={24}>
                    <Header/>
                </Col>
                <Col md={2} sm={2} xs={0}/>
            </Row>
            <Row>
                <Col md={2} sm={2} xs={0}/>
                <Col md={20} sm={20} xs={24}>
                    <Navigation/>
                </Col>
                <Col md={2} sm={2} xs={0}/>
            </Row>
            <Row>
                <Col md={2} sm={2} xs={0}/>
                <Col md={20} sm={20} xs={24}>
                    <Content>
                        {children}
                    </Content>
                </Col>
                <Col md={2} sm={2} xs={0}/>
            </Row>
            <Row>
                <Col md={24} sm={24} xs={24}>
                    <Footer/>
                </Col>
            </Row>

        </>
    )
}


export default DefaultLayout;