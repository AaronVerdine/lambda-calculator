import React, { useState } from "react";
import Header from "./components/Header.js";
import Calculator from "./components/Calculator/calculator";
function App2() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="App" />
        <Header />
        <Calculator />
      </div>
    </div>
  );
}

export default App2;
