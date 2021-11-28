import DefaultLayout from "../component/base/DefaultLayout";
import SignupForm from "../component/signup/SignupForm";
import {Card} from "antd";

const signup =()=>{
    return (
        <>
            <DefaultLayout>
                <Card title={"회원가입"}>
                    <SignupForm/>
                </Card>
            </DefaultLayout>
        </>
    )
}
export default signup;