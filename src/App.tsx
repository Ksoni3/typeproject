import React from "react";
import "./App.css";
import Data from "./components/Data";
// import Application from "./components/Application";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
