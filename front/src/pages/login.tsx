import LoginForm from "../component/login/LoginForm";
import {FC} from "react";
import DefaultLayout from "../component/base/DefaultLayout";
const login = () => {
    return (
        <>
            <DefaultLayout>
                <LoginForm/>
            </DefaultLayout>
        </>

    )
}
export default login;