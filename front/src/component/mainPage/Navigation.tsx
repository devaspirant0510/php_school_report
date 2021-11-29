import {Row,Col,Tabs,Menu} from "antd";
import {HomeOutlined,MessageOutlined,ContainerOutlined} from "@ant-design/icons";
import {NavTitle} from "./style";
import {Link} from "react-router-dom";

const Navigation =()=>{
    return (
        <>
            <Menu mode={"horizontal"}   theme={"dark"}>
                <Menu.Item key={"home"} style={{width:"25%",textAlign:"center"}}>
                    <Link to={"/"}>
                        <NavTitle>
                            홈
                        </NavTitle>
                    </Link>
                </Menu.Item>
                <Menu.Item key={"message"} style={{width:"25%",textAlign:"center"}}>
                    <NavTitle>
                        쪽지
                    </NavTitle>
                </Menu.Item>
                <Menu.Item key={"post"} style={{width:"25%",textAlign:"center"}}>
                    <NavTitle>
                        게시판
                    </NavTitle>
                </Menu.Item>
                <Menu.Item key={"homepage"} style={{width:"24%",textAlign:"center"}}>
                    <NavTitle>
                        홈페이지
                    </NavTitle>
                </Menu.Item>
            </Menu>
{/*
            <Tabs defaultActiveKey="1" centered >
                <TabPane  tab={<div><HomeOutlined />홈</div>} key={1}>

                </TabPane>
                <TabPane tab={<div><MessageOutlined />쪽지</div>} key={2}>

                </TabPane>
                <TabPane tab={<div><ContainerOutlined />게시판</div>} key={3}>

                </TabPane>
            </Tabs>
*/}
        </>
    )
}
export default Navigation;