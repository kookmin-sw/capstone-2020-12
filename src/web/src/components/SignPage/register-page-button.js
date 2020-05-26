import React from 'react';
import { Button, Form } from 'antd';

function RegisterPageButton (props) {
  return (
    //Register 버튼을 누르면 회원가입 진행
    <Form.Item>
      <Button htmlType="submit" onClick={props.onClickRegister} style={{marginInlineEnd: '70%'}}>
        Register
      </Button>
    </Form.Item>
  );
}

export default RegisterPageButton;