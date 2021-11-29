import {Card} from "antd";
import PointRankingCard from "./PointRankingCard";
const dummyData = [
    {
        rank:1,
        name:"이승호",
        userId:"lsh0510",
        point:1000,
    },
    {
        rank:1,
        name:"이승호",
        userId:"lsh0510",
        point:1000,
    },
    {
        rank:1,
        name:"이승호",
        userId:"lsh0510",
        point:1000,
    },
    {
        rank:1,
        name:"이승호",
        userId:"lsh0510",
        point:1000,
    },
    {
        rank:1,
        name:"이승호",
        userId:"lsh0510",
        point:1000,
    },
]

const PointRanking = () => {
    return (
        <>
            <Card title={"포인트 랭킹"} style={{margin:"20px",borderRadius:"15px"}}>
                {dummyData.map((value,index)=>(
                    <PointRankingCard key={index} rank={value.rank} name={value.name} userId={value.userId} point={value.point}/>
                ))}
            </Card>
        </>
    )
}
export default PointRanking;