import {Row,Col,Tabs,Menu} from "antd";
import {HomeOutlined,MessageOutlined,ContainerOutlined} from "@ant-design/icons";
const {TabPane} = Tabs;

const Navigation =()=>{
    return (
        <>
            <Menu mode={"horizontal"}  style={{
                display: 'flex',
                justifyContent: 'space-around'}} theme={"light"}>
                <Menu.Item key={"home"} >
                    홈
                </Menu.Item>
                <Menu.Item key={"message"}>
                    쪽지
                </Menu.Item>
                <Menu.Item key={"post"}>
                    게시판
                </Menu.Item>
                <Menu.Item key={"homepage"}>
                    홈페이지
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