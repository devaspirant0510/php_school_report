<?php
require_once ("../../config/jsonFormat.php");
require_once("../../entity/User.php");

function user_id_check_query($conn,$user_id){
    $sql = "select user_id from member where user_id='$user_id'";
    $result = mysqli_query($conn,$sql);
    mysqli_close($conn);
    // 데이터 베이스가 비어있다면 바로 성공 띄우줌
    if(mysqli_num_rows($result)==0){
        return successMsg($user_id,200);
    }else{
        return errMsg("id is invalid",400);
    }
}

function user_register($conn,$user){
    $sql = "insert into member(_id,user_id,password,email,gender,age,birth) values";
    $sql.="('$user->_id','$user->user_id','$user->password','$user->email',$user->gender,$user->age,'$user->birth')";
    $result = mysqli_query($conn,$sql);
    if($result===false){
        return errMsg("insert error",500);
    }else{
        return successMsg($user->toJson(),201);
    }

}
