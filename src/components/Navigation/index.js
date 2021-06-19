import React from "react";
import { Navbar, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar
      // bg="light"
      style={{
        borderBottom: "solid 3px #1C8ABE",
        paddingBottom: "0",
      }}
      expand="lg"
    >
      <Navbar.Brand as={NavLink} to="/">
        <Image
          src={process.env.PUBLIC_URL + "/logo-nobackground-200.png"}
          alt="logo"
          width="100px"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          style={{
            width: "fit-content",
          }}
          fill
        >
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/other" linkText="Other" />
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
