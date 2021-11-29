import {Card} from "antd";
import PostCard from "./PostCard";
const dummyData = [
    {
        date:"2021-05-10",
        content:"학습자료 요청.",
        name:"이승호"
    },
    {
        date:"2021-05-10",
        content:"학습자료 요청.",
        name:"이승호"
    },
    {
        date:"2021-05-10",
        content:"학습자료 요청.",
        name:"이승호"
    },
]
const RecentlyPost = ()=>{
    return (
        <>
            <Card title={"최근 게시글"} style={{borderRadius:"15px",margin:"20px"}}>

                {dummyData.map((v,index)=>(
                    <PostCard  key={index} name={v.name} date={v.date} content={v.content}/>
                ))}

            </Card>
        </>
    )
}
export default RecentlyPost;