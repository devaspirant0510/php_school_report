<?php
class User
{
    public $_id;
    public $user_id;
    public $password;
    public $email;
    public $gender;
    public $age;
    public $birth;
    public function __construct($_id, $user_id, $password, $email, $gender, $age, $birth)
    {
        $this->_id = $_id;
        $this->user_id = $user_id;
        $this->password = $password;
        $this->email = $email;
        $this->gender = $gender;
        $this->age = $age;
        $this->birth = $birth;
    }
    public function toJson(){
        return json_encode(
            array(
                "_id"=>$this->_id,
                "user_id"=>$this->user_id,
                "password"=>$this->password,
                "email"=>$this->email,
                "gender"=>$this->gender,
                "age"=>$this->age,
                "birth"=>$this->birth
            )
        );
    }
}