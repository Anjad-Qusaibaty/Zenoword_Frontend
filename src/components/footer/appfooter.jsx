import React from "react";
import styled from "styled-components";
import GitHub from "./GitHub.png";
import linkedin from "./linkedin.png";

const FooterContainer = styled.footer`
  background: rgb(28, 139, 190);
  background: linear-gradient(
    58deg,
    rgba(28, 139, 190, 1) 40%,
    rgba(74, 177, 224, 1) 100%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkItem = styled.a`
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  &:hover {
    color: #54cc82;
    text-decoration: none;
    transition: all, 240ms ease-in-out;
  }
`;

export function Appfooter() {
  return (
    <FooterContainer>
      <LinkItem
        href="https://github.com/Anjad-Qusaibaty/Zenoword_Frontend"
        target="_blank"
      >
        Source Code
      </LinkItem>
      <LinkItem
        href="https://github.com/Anjad-Qusaibaty/Zenoword_Frontend"
        target="_blank"
      >
        <img
          src={GitHub}
          alt="github logo"
          style={{ width: "24px", height: "24px" }}
        />
      </LinkItem>
      <LinkItem
        href="https://www.linkedin.com/in/anjad-qusaibaty-70933331/"
        target="_blank"
      >
        Contact Developer
      </LinkItem>
      <LinkItem
        href="https://www.linkedin.com/in/anjad-qusaibaty-70933331/"
        target="_blank"
      >
        <img
          src={linkedin}
          alt="Linkedin logo"
          style={{ width: "24px", height: "24px" }}
        />
      </LinkItem>
    </FooterContainer>
  );
}
