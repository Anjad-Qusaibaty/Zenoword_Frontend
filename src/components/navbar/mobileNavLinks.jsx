// source code:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ
import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { Logout } from "./logout";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const token = useSelector(selectToken);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">About us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/other">Other</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Explore</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Impact</Link>
          </LinkItem>
          <Marginer />
          {token ? <Logout /> : <Accessibility />}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
