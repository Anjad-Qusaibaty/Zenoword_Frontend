//source template:https://github.com/ipenywis/modern-react-login
//source template:https://youtu.be/-bll7l-BKQI

import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 14px;
  color: rgba(28, 138, 190, 0.7);
  font-weight: 500;
  text-decoration: none;
`;
export const AltMutedLink = styled.p`
  font-size: 14px;
  color: rgba(28, 138, 190, 0.7);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 18px;
  color: rgb(84, 204, 130);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  &:hover {
    transition: all, 240ms ease-in-out;
    color: rgba(84, 204, 130, 0.7);
    text-decoration: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(28, 138, 190, 0.4);
  padding: 0px 10px;
  color: #1c8abe;
  transition: all 200ms ease-in-out;
  font-size: 16px;

  &::placeholder {
    color: rgba(28, 138, 190, 0.7);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(28, 138, 190);
    color: #1c8abe;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export const SubmitButton = styled.button`
  width: 77%;
  padding: 11px 10%;
  margin-top: 5%;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(28, 139, 190);
  background: linear-gradient(
    58deg,
    rgba(28, 139, 190, 1) 40%,
    rgba(74, 177, 224, 1) 100%
  );

  &:hover {
    filter: brightness(1.09);
    letter-spacing: 1px;
  }
`;
export const LinkButton = styled.a`
  width: 77%;
  padding: 11px 10%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(28, 139, 190);
  background: linear-gradient(
    58deg,
    rgba(28, 139, 190, 1) 40%,
    rgba(74, 177, 224, 1) 100%
  );

  &:hover {
    filter: brightness(1.09);
    text-decoration: none;
  }
  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
`;
