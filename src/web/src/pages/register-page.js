import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Form, message } from 'antd';
import SignPageEmail from '../components/SignPage/sign-page-email';
import SignPagePassword from '../components/SignPage/sign-page-password';
import RegisterPageButton from '../components/SignPage/register-page-button';
import RegisterPageName from '../components/SignPage/register-page-name';

const SIGNUP = gql`
  mutation ($email: String!, $password: String!, $name: String!) {
    signUp(
      email: $email
      password: $password
      name : $name
    ) {
      token
    }
  }
`;

function RegisterPage (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mutate] = useMutation(SIGNUP, {
    onCompleted() {
      message.success("회원가입 완료!");
      history.goBack();
    },
    onError() {
      message.error("중복된 이메일 입니다.");
    }
  });
  const history = useHistory();

  //email state 변경
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  //password state 변경
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  //name state 변경
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  //register 버튼이 눌렸을 때 실행, name, email, password가 입력되지 않았으면 alert로 경고
  //다 입력되었다면 mutate진행, 로그인 화면으로 이동
  const onClickRegister = () => {
    if (email === "" || password === "" || name === "") {
      alert("Name, Email, Password를 입력해주세요.");
    }
    else {
      mutate({ variables: { email, password, name } });
    }
  };

  props.onChangeIsMediaView(window.location.pathname === "/watch");
  return (
    <div style={{ maxWidth: '450px', margin: '13rem auto'}} >
      <h1>
        Register
      </h1>
      <Form>
        <RegisterPageName onChangeName={onChangeName}/>
        <SignPageEmail onChangeEmail={onChangeEmail}/>
        <SignPagePassword onChangePassword={onChangePassword}/>
        <RegisterPageButton onClickRegister={onClickRegister}/>
      </Form>
    </div>
  );
}

export default RegisterPage;