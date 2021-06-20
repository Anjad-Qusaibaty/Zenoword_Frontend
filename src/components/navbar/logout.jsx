import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: space-around;
`;

const LogoutButton = styled.button`
  padding: 11px 20%;
  margin-top: 5%;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(84, 204, 130);
  background: linear-gradient(
    58deg,
    rgba(84, 204, 130, 1) 40%,
    rgba(142, 230, 176, 1) 100%
  );

  &:hover {
    filter: brightness(1.2);
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
