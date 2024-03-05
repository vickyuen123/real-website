import React from "react";
// import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const AboutWrapper = styled.div`
  margin-left: 200px; /* Sets margin on all sides */
  margin-top: 100px;
  margin-right: 200px;
  margin-bottom: 100px;
  gap: 20px;
  padding: 10px 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  /* Adding some padding to see the content */
`;

function getLoremIpsumText() {
  return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`;
}

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutWrapper>
        <img
          src="https://headshots-inc.com/wp-content/uploads/2023/02/Professional-Headshot-Photography-Example-1.jpg"
          alt="Category 11"
          style={{ width: "200px", height: "200px" }}
        />
        <p>{getLoremIpsumText()}</p>
      </AboutWrapper>

      <AboutWrapper>
        <p>{getLoremIpsumText()}</p>
        <img
          src="https://headshots-inc.com/wp-content/uploads/2023/02/Professional-Headshot-Photography-Example-1.jpg"
          alt="Category 11"
          style={{ width: "200px", height: "200px" }}
        />
      </AboutWrapper>

      <Footer />
      {/* Other content of your application */}
    </div>
  );
};
export default About;
