import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function LoginButton () {
  return (
    <Link to={'/login'}>
      <Button type="primary" ghost style={{height: "auto"}}>
        <Avatar size="small" icon={<UserOutlined/>} style={{backgroundColor:"#82BEE6"}}/>
        <span/>
        &nbsp;&nbsp;로그인
      </Button>
    </Link>
  );
}

export default LoginButton;