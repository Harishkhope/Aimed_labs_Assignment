import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 40px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%; /* Make the input take up the full width of the parent */
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100px; /* Make the button take up the full width of the parent */
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm>
      <Header>Login Form</Header>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" />

        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />

        <Button type="submit">Log In</Button>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
