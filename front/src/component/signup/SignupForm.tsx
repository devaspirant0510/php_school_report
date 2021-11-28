import {Form, Input, Button, Radio, DatePicker, InputNumber, Switch,} from 'antd';
import React, {useCallback, useState} from "react";
import InputHooks from "../../hooks/InputHooks"

const SignupForm = () => {
    const [userId, onChangeId] = InputHooks('');
    const [pwd, setPwd] = useState('');

    const onSubmitForm = useCallback((e: React.FormEvent) => {
        console.log("submit form")
    }, []);
    const onChangePwd = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    }, []);
    return (
        <>
            <Form
                labelCol={{span: 3}}
                wrapperCol={{span: 24}}
                layout="horizontal"
                onFinish={onSubmitForm}
            >
                <Form.Item
                    label="아이디"
                    name={"user_id"}
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input
                        value={userId}
                        onChange={onChangeId}
                        placeholder={"아이디를 입력하세요"}
                    />
                </Form.Item>
                <Form.Item label="비밀번호">
                    <Input
                        value={pwd}
                        onChange={onChangePwd}
                        placeholder={"비밀번호를 입력하세요"}
                    />
                </Form.Item>
                <Form.Item label="비밀번호확인">
                    <Input.Password
                        placeholder={"비밀번호를 다시 입력해주세요"}
                    />
                </Form.Item>
                <Form.Item label="이메일" >
                    <Input.Password/>
                </Form.Item>
                <Form.Item label="성별">
                    <Radio.Group>
                        <Radio.Button value={1}>
                            남
                        </Radio.Button>
                        <Radio.Button value={2}>
                            여
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="나이">
                    <Input/>
                </Form.Item>
                <Form.Item label="생일">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber/>
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                    <Switch/>
                </Form.Item>
                <Form.Item>
                    <Button danger>취소</Button>
                    <Button htmlType={"submit"} type={"primary"}>회원가입</Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default SignupForm;