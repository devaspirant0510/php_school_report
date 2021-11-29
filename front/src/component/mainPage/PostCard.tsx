import {Card} from "antd";
interface Props{
    name:string,
    date:string,
    content:string
}
const PostCard = ({content,date,name}:Props) =>{
    return (
        <>
            <Card title={name} extra={date} style={{margin:"8px"}}>
                {content}
            </Card>

        </>
    )
}
export default PostCard;