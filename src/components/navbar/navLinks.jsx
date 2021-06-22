// source template:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #1c8abe;
  font-weight: 500;
  font-size: calc(16px + 0.25vw);
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    background-color: #1c8abe;
    color: white;
  }
`;
const LinkItemB = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #1c8abe;
  font-weight: 500;
  font-size: calc(18px + 0.25vw);
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    background-color: #54cc82;
    color: white;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-weight: bold;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export function NavLinks(props) {
  const token = useSelector(selectToken);
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItemB>
          <Link href="/about">About Zenoword</Link>
        </LinkItemB>

        {token ? (
          <LinkItem>
            <Link href="/mylibrary">My Library</Link>
          </LinkItem>
        ) : null}
      </LinksWrapper>
    </NavLinksContainer>
  );
}
