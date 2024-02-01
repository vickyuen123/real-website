// Header.tsx
import React from "react";
import Stickynode from "react-stickynode";
import styled from "styled-components";

// Define styles for your header using styled-components
const HeaderWrapper = styled.div`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: relative;
  top: 0;

  z-index: 999; /* Ensures header is above other content */
`;

const HeaderTitle = styled.h1`
  margin-left: 200px; /* Adjust the spacing as per your requirement */
`;

const Header: React.FC = () => {
  return (
    <Stickynode top={0} innerZ={999}>
      <HeaderWrapper>
        <HeaderTitle>Your Header Content</HeaderTitle>
        <HeaderTitle>Your Header Content</HeaderTitle>
      </HeaderWrapper>
    </Stickynode>
  );
};

export default Header;
