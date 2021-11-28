import {produce} from "immer";
import {userState,checkIdInvalidAction,CHECK_ID_INVALID} from "../types/userTypes";
const initialState:userState = {user:null,isLogin:false}
const userReducer = (prevState=initialState,action:checkIdInvalidAction)=>{
    return produce(prevState,(draft)=>{
        switch (action.type){
            case CHECK_ID_INVALID:
                break;

        }

    });
}
export default userReducer;