import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { useHistory } from "react-router-dom";

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
    filter: brightness(1.08);
  }
`;

export function Logout(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm() {
    dispatch(logOut());
    history.push("/");
  }
  return (
    <AccessibilityContainer>
      <LogoutButton onClick={submitForm}>Logout</LogoutButton>
    </AccessibilityContainer>
  );
}
