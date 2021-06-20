// source template:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ

import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: space-around;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border-radius: 20px;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  background: rgb(28, 139, 190);
  background: linear-gradient(
    58deg,
    rgba(28, 139, 190, 1) 40%,
    rgba(74, 177, 224, 1) 100%
  );

  &:hover {
    filter: brightness(1.2);
    text-decoration: none;
    color: #fff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <LoginButton as="a" href="/login">
        Login / Sign-up
      </LoginButton>
    </AccessibilityContainer>
  );
}
