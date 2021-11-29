<?php
function errMsg($msg,$code){
    $data = array('status'=>$code, 'message'=>"error", 'data'=>$msg);
    return json_encode($data);
}
function successMsg($msg,$code){
    $data = array('status'=>$code, 'message'=>"ok", 'data'=>$msg);
    return json_encode($data);
}