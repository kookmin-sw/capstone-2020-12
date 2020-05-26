import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'antd';

function LoginPageButton (props) {
  return (
    //Log in 버튼과 Register가 있음, Log in버튼을 누르면 로그인 진행, Register를 누르면 회원가입 화면 이동 
    <Form.Item>
      <Button htmlType="submit" onClick={props.onClickLogin} style={{marginInlineEnd: '70%'}}>
        Log in
      </Button>
      <Link to="/register">
        Register
      </Link>
    </Form.Item>
  );
}

export default LoginPageButton;