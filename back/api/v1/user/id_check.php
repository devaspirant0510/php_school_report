<?php
//cors 세팅
header("Access-Control-Allow-Origin: *");
//header('Access-Control-Allow-Origin : *');

// 요청을 json 에 담아서 보내기때문에 처리
$data = json_decode(file_get_contents('php://input'), true);
$user_id = $data['user_id'];
require_once ("../../config/db_info.php");
$conn = mysqli_connect(
    host,
    user,
    password,
    database
);
require_once("../../dao/query.php");
$data = user_id_check_query($conn,$user_id);
echo $data;



