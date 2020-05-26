import React from 'react';
import {Input, Form} from 'antd';
import { UserOutlined } from '@ant-design/icons';

function SignPageEmail (props) {
  return (
    <div>
      <h4 style={{marginTop : '2rem'}}>
        Email address
      </h4>
      {/*이메일을 입력하지않으면 이메일을 입력하세요 메세지 출력, 이메일 양식이 @ .com이 아니라도 출력*/}
      <Form.Item
        name="email"
        rules={
          [{
            type: 'email',
            required: true,
            message: '이메일을 입력하세요.'
          }
          ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" onChange={props.onChangeEmail}/>
      </Form.Item>
    </div>
  );
}

export default SignPageEmail;