import DefaultLayout from "../component/base/DefaultLayout";
import SignupForm from "../component/signup/SignupForm";
import {Card,Row,Col} from "antd";

const signup =()=>{
    return (
        <>
            <DefaultLayout>
                <Row>
                    <Col lg={5} md={4} xs={0}/>
                    <Col lg={14} md={18} xs={24}>
                        <Card title={<h1 style={{color:"#1890ff",fontWeight:"bolder"}}>회원가입</h1>}
                              style={{borderRadius:"25px",margin:"10px",backgroundColor:"#f9f9f9",marginTop:"14px"}}>
                            <SignupForm />
                        </Card>
                    </Col>
                    <Col lg={5} md={4} xs={0}/>
                </Row>
            </DefaultLayout>
        </>
    )
}
export default signup;