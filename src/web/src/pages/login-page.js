import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Form, message } from 'antd';
import SignPageEmail from '../components/SignPage/sign-page-email';
import SignPagePassword from '../components/SignPage/sign-page-password';
import LoginPageButton from '../components/SignPage/login-page-button';

const SIGNIN = gql`
  mutation ($email: String!, $password: String!) {
    signIn(
      email: $email
      password: $password
    ) {
      token
      user {
        id
        name
        profileImgUrl
        email
      }
    }
  }
`;

function LoginPage (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mutate] = useMutation(SIGNIN, {
    onCompleted({signIn: {token, user}}) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user_id", user.id);
      sessionStorage.setItem("user_name", user.name);
      sessionStorage.setItem("user_profileImgUrl", user.profileImgUrl);
      sessionStorage.setItem("user_email", user.email);
      props.afterLogin();
      message.success("로그인 성공");
      history.push('/');
    },
    onError() {
      message.error("이메일과 비밀번호를 확인해주세요.");
    }
  });
  const history = useHistory();

  //email state 변경
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  // password state 변경
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  //login 버튼이 눌렸을 때 email이나 password가 입력되지 않았으면 alert로 경고
  //다 입력이 되었으면 mutate진행, 받아온 token을 sessionStorage에 저장하고 App.js에서 선언한 getToken()실행, 홈으로 이동
  const onClickLogin = () => {
    if (email === "" || password === "") {
      message.error("Email이나 Password를 입력해주세요.");
    }
    else {
      mutate({ variables: { email, password } });
    }
  };

  props.onChangeIsMediaView(window.location.pathname === "/watch");
  return (
    <div style={{ maxWidth: '450px', margin: '13rem auto'}} >
      <h1>
        Login
      </h1>
      <Form>
        <SignPageEmail onChangeEmail={onChangeEmail}/>
        <SignPagePassword onChangePassword={onChangePassword}/>
        <LoginPageButton onClickLogin={onClickLogin}/>
      </Form>
    </div>
  );
}

export default LoginPage;