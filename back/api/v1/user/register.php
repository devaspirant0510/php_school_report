<?php
require_once("../../entity/User.php");
require_once("../../dao/query.php");
require_once("../../config/util.php");
//cors 세팅
header("Access-Control-Allow-Origin: *");
//header('Access-Control-Allow-Origin : *');

// 요청을 json 에 담아서 보내기때문에 처리
$data = json_decode(file_get_contents('php://input'), true);
$user_id = $data['user_id'];
$password = $data['password'];
$email = $data['email'];
$gender = $data['gender'];
$age = $data['age'];
$birth = $data['birth'];

// _id 는 uuidV4 비밀번호는 해시
$user = new User(getUUID_V4(),$user_id,str_convert_to_hash($password),$email,$gender,$age,$birth);

$conn = mysqli_connect(
    "127.0.0.1",
    "root",
    "lsh#200205",
    "seoil"
);
echo user_register($conn,$user);