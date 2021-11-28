export const CHECK_ID_INVALID = "CHECK_ID_INVALID";

export interface checkIdInvalidData {
    user_id:string
}
export interface checkIdInvalidAction {
    type:typeof CHECK_ID_INVALID,
    data:checkIdInvalidData
}


export interface userState{
    user:{
        _id:string,
        user_id:string,
        password:string,
        email:string,
        gender:boolean,
        age:number,
        birth:string,
    }|null,
    isLogin:boolean
}
