import { ReactChild, ReactChildren} from "react";
import Header from "./Header"
import Footer from "./Footer";
import Banner from "../mainPage/Banner";
import Navigation from "../mainPage/Navigation";
import {Layout, Row, Col} from "antd";

const {Content} = Layout;


interface AuxProps {
    children: ReactChild | ReactChildren;
}

const AppLayout = ({children}: AuxProps) => {
    return (
        <>
            <Row style={{backgroundColor:"#f2f9f5"}}>
                <Col md={2} sm={2} xs={0}/>
                <Col md={20} sm={20} xs={24}>
                    <Header/>
                </Col>
                <Col md={2} sm={2} xs={0}/>
            </Row>
            <Row>
                <Col md={2} sm={2} xs={0} style={{backgroundColor:"#001529"}}/>
                <Col md={20} sm={20} xs={24}>
                    <Navigation/>
                </Col>
                <Col md={2} sm={2} xs={0} style={{backgroundColor:"#001529"}}/>
            </Row>
            <Row>
                <Col md={24} sm={24} xs={24}>
                    <Banner/>
                </Col>
            </Row>
            <Row style={{backgroundColor:"#f2f9f5"}} >
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


export default AppLayout;