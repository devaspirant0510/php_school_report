import AppLayout from "../component/base/AppLayout";
import {Col, Row} from "antd";
import RecentlyPost from "../component/mainPage/RecentlyPost";
import PointRanking from "../component/mainPage/PointRanking";
import React from "react";

const index=()=>{
    return (
        <>
            <AppLayout>
                <>
                    <Row gutter={2}>
                        <Col md={16} sm={12} xs={24}>
                            <RecentlyPost/>
                        </Col>
                        <Col md={8} sm={12} xs={24}>
                            <PointRanking/>
                        </Col>
                    </Row>
                </>
            </AppLayout>
        </>
    )

}
export default index;