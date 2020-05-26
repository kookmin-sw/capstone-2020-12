import React from 'react';
import { Input, Form } from 'antd';
import { LockOutlined } from '@ant-design/icons';

function SignPagePassword (props) {
  return (
    <div>
      <h4 style={{marginTop : '1rem'}}>
        Password
      </h4>
      {/*비밀번호를 입력하지않으면 비밀번호를 입력하라는 메세지 출력*/}
      <Form.Item
        name="password"
        rules={
          [{
            required: true,
            message: '비밀번호를 입력하세요.'
          }
          ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="Password" onChange={props.onChangePassword}/>
      </Form.Item>
    </div>
  );
}

export default SignPagePassword;