// Header.tsx
import React from "react";
import Stickynode from "react-stickynode";
import styled from "styled-components";

// Define styles for your header using styled-components
const HeaderWrapper = styled.div`
  background-color: rgba(255, 105, 180, 0.5);
  color: black;
  padding: 10px 20px;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  z-index: 999; /* Ensures header is above other content */
`;

const HeaderTitle = styled.div`
  padding: 20px 12px;
  font-size: 20px;
  margin-left: 20px; /* Adjust the spacing as per your requirement */
`;
const Buttons = styled.button`
  font-size: 20px;
`;

const StyledImage = styled.img`
  max-width: 300px;
  max-height: 80px;
`;

const ButtonList = styled.div`
  display: flex;
  gap: 20px; // space between flex items
  text-align: left;
`;

const BottomRightText = styled.div`
  position: absolute; // Positioned absolutely within the header
  bottom: 0; // Aligns the text to the bottom
  right: 0; // Aligns the text to the right
  padding: 10px; // Adds some spacing inside the text box (optional)
  /* Additional styles for your text (color, font, etc.) */
`;
const Header: React.FC = () => {
  return (
    <Stickynode top={0} innerZ={999}>
      <HeaderWrapper>
        <StyledImage
          src="https://as1.ftcdn.net/v2/jpg/02/04/66/02/1000_F_204660283_onveez8hTPfZlIDb9v67AUQA7kwGVX79.jpg"
          // https://media1.giphy.com/media/lKXEBR8m1jWso/giphy.gif?cid=6c09b9529cwaatwct7oisypjt8fcrpy30tp45xeiuo3ke7kv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g
          alt="Funny Spongebob GIF"
        />
        <HeaderTitle>the company name </HeaderTitle>
        <BottomRightText>
          <ButtonList>
            <Buttons>about </Buttons>
            <Buttons>hello</Buttons>
          </ButtonList>
        </BottomRightText>
      </HeaderWrapper>
    </Stickynode>
  );
};

export default Header;
