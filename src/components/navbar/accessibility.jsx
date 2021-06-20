// source template:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ

import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const SignupButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #1c8abe;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  border: 2px solid #1c8abe;

  &:hover {
    background-color: #fff;
    text-decoration: none;
    border: 2px solid #54cc82;
    color: #1c8abe;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #1c8abe;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #54cc82;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #54cc82;
    text-decoration: none;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <SignupButton as="a" href="/signup">
        Sign-up
      </SignupButton>
      <LoginButton as="a" href="/login">
        Login
      </LoginButton>
    </AccessibilityContainer>
  );
}
