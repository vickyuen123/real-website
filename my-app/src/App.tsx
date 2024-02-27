import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Catagory from "./Catagory";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};
export default App;
