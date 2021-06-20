import React from "react";
import styled from "styled-components";
import ZenowordLogo from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <a href="/">
          <img src={ZenowordLogo} alt="Zenoword logo" />
        </a>
      </LogoImg>
      {/* <p style={{ position: "relative" }}>hello</p> */}
    </LogoWrapper>
  );
}
