import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Catagory from "./Catagory";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />
      <Catagory />
      <Footer />

      {/* Other content of your application */}
    </div>
  );
};
export default App;
