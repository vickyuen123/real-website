// Footer.jsx or Footer.tsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333; // Choose your desired footer background color
  color: white; // Text color
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
