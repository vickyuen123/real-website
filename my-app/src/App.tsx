import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import React from 'react';
import Header from "./Header";
import Body from "./Body";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />

      {/* Other content of your application */}
    </div>
  );
};
export default App;
