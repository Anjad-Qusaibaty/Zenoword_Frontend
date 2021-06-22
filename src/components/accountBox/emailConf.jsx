//source template:https://github.com/ipenywis/modern-react-login
//source template:https://youtu.be/-bll7l-BKQI

import React from "react";
import styled from "styled-components";
import { EmailConfForm } from "./emailConfForm";

const BoxContainer = styled.div`
  width: 320px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(28, 138, 190, 0.7);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -330px;
  left: -100px;
  background: rgb(28, 139, 190);
  background: linear-gradient(
    58deg,
    rgba(28, 139, 190, 1) 40%,
    rgba(74, 177, 224, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  text-align: center;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export function EmailConfAlt(props) {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          <HeaderText>Email</HeaderText>
          <HeaderText>Confirmation</HeaderText>
          <SmallText>Please type in the email of your account</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <EmailConfForm />
      </InnerContainer>
    </BoxContainer>
  );
}
