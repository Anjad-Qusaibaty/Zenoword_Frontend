// source code:https://github.com/ipenywis/react-navbar-responsive
//https://youtu.be/mt7bcvsreMQ
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { Logout } from "./logout";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  border-top: solid 2px #1c8abe;
  border-bottom: solid 0.5px #54cc82;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  function TryP() {
    return (
      <p
        style={{
          fontSize: "calc(18px + 0.25vw)",
          paddingLeft: "15px",
          paddingTop: "20px",
          color: "#1C8ABE",
        }}
      >
        Hello <span style={{ color: "#54CC82" }}>{user.name}</span>!
      </p>
    );
  }

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
        {/* <p
          style={{
            fontSize: "calc(18px + 0.25vw)",
            paddingLeft: "15px",
            paddingTop: "20px",
            color: "#1C8ABE",
          }}
        >
          Hello <span style={{ color: "#54CC82" }}>{user.name}</span>!
        </p> */}
        {token ? <TryP /> : null}
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && token && <Logout />}
        {!isMobile && !token && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
