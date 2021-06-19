// source code:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ

import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: space-around;
`;
// const Textlogout = styled.p`
//   border: 0;
//   outline: 0;
//   padding: 8px 1em;
// `;

const LogoutButton = styled.button`
  border: 0;
  outline: 0;
  height: fit-content;
  padding: 9px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #54cc82;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  border: 2px solid #54cc82;

  &:hover {
    background-color: #fff;
    text-decoration: none;
    color: #1c8abe;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Logout(props) {
  const dispatch = useDispatch();

  return (
    <AccessibilityContainer>
      <LogoutButton onClick={() => dispatch(logOut())}>Logout</LogoutButton>
    </AccessibilityContainer>
  );
}
