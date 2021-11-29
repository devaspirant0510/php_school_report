import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    Row,
    Col,
    InputNumber,
    RadioChangeEvent,
    Slider,
} from 'antd';
import React, {useCallback, useState} from "react";
import InputHooks from "../../hooks/InputHooks"
import moment, {Moment} from "moment";
import {RuleObject} from 'antd/lib/form';

const requiredMessageRules = {required: true, message: '입력해주세요'}
const SignupForm = () => {
    const [userId, onChangeUserId] = InputHooks('');
    const [pwd, onChangePwd] = InputHooks('');
    const [checkPwd, onChangeCheckPwd] = InputHooks('');
    const [email, onChangeEmail] = InputHooks('');


    const [idDuplicate, setIdDuplicate] = useState(false);
    const [genderRadioGroup, setGenderRadioGroup] = useState(0);
    const [age, onChangeAge] = useState(0);
    const [date, setDate] = useState<Moment>(moment(null));

    const handleDateChange = (dateObj: moment.Moment | null, dateStr: string) => {
        if (dateObj) {
            setDate(dateObj);
        }
    }

    const onSubmitForm = (e: React.FormEvent) => {
        console.log(userId)
        console.log(pwd)
        console.log(email)
        console.log(age)
        console.log(genderRadioGroup)
        console.log(date.format("yy-M-D"));
        const result = fetch("http://localhost/api/v1/user/register.php", {
            method: "POST",
            body: JSON.stringify({
                user_id: userId,
                password: pwd,
                email,
                gender: genderRadioGroup,
                age,
                birth: date.format("yy-M-D")
            })
        });
        console.log(result);

    };

    const validatePassword = (rule: any, value: any) => {
        console.log(value, rule, pwd)
        if (value === "") {
            return Promise.reject(new Error("입력해주세요"));
        }
        if (value !== pwd) {
            return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
        } else {
            return Promise.resolve();
        }
    }

    const onChangeGenderRadioGroup = useCallback((e: RadioChangeEvent) => {
        setGenderRadioGroup(e.target.value);

    }, []);

    const checkIdInvalid = async () => {
        console.log(userId);
        const result = await fetch("http://localhost/api/v1/user/id_check.php", {
            method: "POST",
            body: JSON.stringify({
                user_id: userId
            })
        });

        const data = await result.json();
        if (data.message === "ok") {
            alert("사용가능한 아이디입니다.");
            setIdDuplicate(true);
        } else {
            alert("사용 불가능한 아이디입니다.");
        }

    };
    const validateId = (rule: RuleObject, value: any) => {
        if (value === "") {
            return Promise.reject(new Error("입력해주세요"))
        }
        return Promise.resolve();

    }
    return (
        <>
            <Form
                labelCol={{span: 7}}
                wrapperCol={{span: 24}}
                layout="vertical"
                onFinish={onSubmitForm}
            >
                <Form.Item
                    label="아이디"
                    name={"user_id"}
                    rules={[
                        requiredMessageRules
                    ]}
                >
                    <Row gutter={4}>
                        <Col span={20}>
                            <Input
                                value={userId}
                                onChange={onChangeUserId}
                                placeholder={"아이디를 입력하세요"}
                            />

                        </Col>
                        <Col span={4}>
                            <Button onClick={checkIdInvalid}>
                                중복확인
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    label="비밀번호"
                    name={"password"}
                    rules={[
                        requiredMessageRules,
                        {
                            pattern: new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$"),
                            message: "비밀번호는 대/소문자 특수문자 포함하여 8자이상"
                        }
                    ]}>
                    <Input.Password
                        value={pwd}
                        onChange={onChangePwd}
                        placeholder={"비밀번호를 입력하세요"}
                    />
                </Form.Item>
                <Form.Item
                    name={"passwordCheck"}
                    label="비밀번호 확인"
                    rules={[
                        {
                            validator: validatePassword
                        }
                    ]}
                >
                    <Input.Password
                        value={checkPwd}
                        onChange={onChangeCheckPwd}
                        placeholder={"비밀번호를 다시 입력해주세요"}
                    />
                </Form.Item>
                <Form.Item
                    label="이메일"
                    name={"email"}
                    rules={[
                        requiredMessageRules,
                        {type: "email", message: "email 형식이 아닙니다."}
                    ]}
                >
                    <Input value={email}
                           onChange={onChangeEmail}/>
                </Form.Item>
                <Form.Item
                    name={"gender"}
                    label="성별"
                >
                    <Radio.Group onChange={onChangeGenderRadioGroup} value={genderRadioGroup}>
                        <Radio.Button value={0}>
                            남
                        </Radio.Button>
                        <Radio.Button value={1}>
                            여
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="나이"
                    name={"age"}
                >
                    <Row>
                        <Col span={12}>
                            <Slider
                                min={0}
                                max={100}
                                onChange={onChangeAge}
                                value={age}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={0}
                                max={100}
                                style={{margin: '0 16px'}}
                                value={age}
                                onChange={onChangeAge}
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    label="생일"
                    rules={[
                        requiredMessageRules
                    ]}
                >
                    <DatePicker onChange={handleDateChange}/>
                </Form.Item>
                <Form.Item>
                    <Row gutter={4}>
                        <Col span={12}>
                            <Button danger style={{width: "100%"}}>취소</Button>
                        </Col>
                        <Col span={12}>
                            <Button htmlType={"submit"} style={{width: "100%"}} type={"primary"}>회원가입</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}
export default SignupForm;