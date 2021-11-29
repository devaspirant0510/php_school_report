import {Card, Col, Row} from "antd";

interface Props{
    rank:number,
    name:string,
    userId:string,
    point:number,
}
const PointRankingCard = ({point,rank,
                          userId,name}:Props) => {
    return (
        <>
            <Card style={{margin:"8px"}}>
                <Row>
                    <Col span={2}>
                        {rank}
                    </Col>
                    <Col span={8}>
                        {name}
                    </Col>
                    <Col span={8}>
                        {userId}
                    </Col>
                    <Col span={4}>
                        {point}
                    </Col>
                </Row>

            </Card>
        </>
    )
}
export default PointRankingCard;