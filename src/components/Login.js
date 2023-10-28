import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff; /* Changed background color */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Increased font size */
`;

const Heading = styled.h2`
  text-align: center;
  color: #333; /* Changed text color */
`;

const Login = () => {
  return (
    <Wrapper>
      <Heading>Login</Heading> 
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Submit</Button>
    </Wrapper>
  );
};

export default Login;
