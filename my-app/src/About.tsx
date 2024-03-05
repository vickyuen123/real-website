import React from "react";
// import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Test = styled.div`
  margin-left: 200px; /* Sets margin on all sides */
  margin-top: 100px;
  margin-right: 200px;
  margin-bottom: 100px;
  padding: 20px; /* Adding some padding to see the content */
`;

const Marg = styled.div`
  margin-left: 20px; /* Sets margin on all sides */

  margin-right: 20px;

  padding: 20px;
`;

const Photo = styled.img`
  src="https://gifdb.com/images/high/spongebob-kiss-my-sponge-jj8sfknlmk53cazv.gif",

  
  style={{ width: "100%", height: "auto" }}

`;
const About: React.FC = () => {
  return (
    <div>
      <Header />
      <Test>
        <Marg>
          <img
            src="https://headshots-inc.com/wp-content/uploads/2023/02/Professional-Headshot-Photography-Example-1.jpg"
            alt="Category 11"
            style={{ width: "25%", height: "auto" }}
          />
        </Marg>
        hello
      </Test>

      <Footer />
      {/* Other content of your application */}
    </div>
  );
};
export default About;
