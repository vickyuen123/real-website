// Header.tsx
import React from "react";
import Stickynode from "react-stickynode";
import styled from "styled-components";
import logo from "./logo.svg";

// Define styles for your header using styled-components
const HeaderWrapper = styled.div`
  background-color: rgba(173, 216, 230, 0.5);
  color: black;
  padding: 10px 20px;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  z-index: 999; /* Ensures header is above other content */
`;

// const LineButtons = styled.div`
//   font-size: 2px
//   display: flex;
//   flex-direction: row;
// `;

const HeaderTitle = styled.div`
  font-size: 20px
  margin-left: 20px; /* Adjust the spacing as per your requirement */
`;
const Buttons = styled.button`
  font-size: 20px;
`;

// const PositionHeader = styled(HeaderTitle)`
//   position: relative;
//   bottom: 0; // Aligns the button to the bottom of the header
//   // Adds some spacing from the right, adjust as needed
// `;

const StyledImage = styled.img`
  max-width: 300px; /* Adjust dimensions as needed */
  max-height: 30px; /* Adjust dimensions as needed */
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
          src="https://media2.giphy.com/media/tm0GlA0gw3wvm/giphy.gif?cid=6c09b95208ctw25sv5xfped9zm8pcqbybb41ma8hvocrhzmc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
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
