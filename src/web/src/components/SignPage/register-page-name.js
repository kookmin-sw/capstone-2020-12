import React from 'react';
import {Input, Form} from 'antd';

function RegisterPageName (props) {
  return (
    <div>
      <h4 style={{marginTop : '2rem'}}>
        Name
      </h4>
      {/*이름을 입력하지않고 Register 버튼을 누르면 이름을 입력하세요 메세지 출력*/}
      <Form.Item
        name="name"
        rules={
          [{
            type: 'string',
            required: true,
            message: '이름을 입력하세요.'
          }
          ]}
      >
        <Input placeholder="Name" onChange={props.onChangeName}/>
      </Form.Item>
    </div>
  );
}

export default RegisterPageName;