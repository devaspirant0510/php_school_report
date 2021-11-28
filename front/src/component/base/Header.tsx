import {Button, Row, Col,Tabs} from "antd";
import {UsergroupAddOutlined, LoginOutlined} from "@ant-design/icons";
import {HeaderTitle, IconButton} from "./style"
import {Link} from "react-router-dom";
const {TabPane} = Tabs;

const Header = () => {
    return (
        <div style={{paddingTop:"20px",paddingBottom:"15px",}}>
            <Row gutter={2} justify={"space-around"} align={"middle"}>
                {/* md sm xs */}
                <Col md={20} sm={19} xs={24}>
                    <Link to={"/"}>
                        <HeaderTitle>
                            php 프로그래밍 입문
                        </HeaderTitle>
                    </Link>
                </Col>
                <Col md={4} sm={5} xs={0}>
                    <div style={{display: "flex",justifyContent:"end"}}>
                        <IconButton>
                            <Link to="/signup">
                                <div>
                                    <UsergroupAddOutlined style={{fontSize: "150%"}}/>
                                </div>
                                <div>회원가입</div>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link to="/login">
                                <div>
                                    <LoginOutlined style={{fontSize: "150%"}}/>
                                </div>
                                <div>로그인</div>
                            </Link>
                        </IconButton>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Header;