import React from 'react';
import { Col, Row } from 'antd';
import UploadButton from './header-icons-uploadButton';
import UserMenu from './header-icons-userMenu';
import LoginButton from './header-icons-loginButton';

function HeaderIcons () {
  return (
    <Row>
      <Col>
        <UploadButton />
      </Col>
      <Col>
        {
          (sessionStorage.getItem("token")) ?
            <UserMenu/>
            :
            <LoginButton/>
        }
      </Col>
    </Row>
  );
}

export default HeaderIcons;