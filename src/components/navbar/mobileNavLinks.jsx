// source template:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ
import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { Logout } from "./logout";
import ZenowordLogo from "../../assets/images/logo.png";
import { selectUser } from "../../store/user/selectors";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  z-index: 100;
`;

const LinksWrapper = styled.ul`
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0;
`;

const LinkItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.1em;
  color: #1c8abe;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    transition: all, 240ms ease-in-out;
    color: rgba(28, 138, 190, 0.7);
    text-decoration: none;
  }
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  function UserLogged() {
    return (
      <p
        style={{
          fontSize: "calc(18px + 0.25vw)",
          paddingLeft: "15px",
          paddingTop: "20px",
          color: "#1C8ABE",
        }}
      >
        Hello <span style={{ color: "#54CC82" }}>{user.name}</span> 👋
      </p>
    );
  }

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <img
            src={ZenowordLogo}
            alt="Zenoword logo"
            style={{
              width: "120px",
              height: "120px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <LinkItem>{token ? <UserLogged /> : null}</LinkItem>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/about">About Zenoword</Link>
          </LinkItem>

          {token ? (
            <LinkItem>
              <Link href="mylibrary">My Library</Link>
            </LinkItem>
          ) : null}

          <Marginer />
          {token ? <Logout /> : <Accessibility />}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
