import React from 'react';
import { Button, Form } from 'antd';

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

function UploadSubmitButton (props) {
  return (
    <Form.Item {...tailLayout}>
      <Button
        type="primary"
        size="large"
        onChange={props.onClick}
      >
        Submit
      </Button>
    </Form.Item>
  );
}

export default UploadSubmitButton;