import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import { useState, useEffect } from "react";
import { ethers } from "hardhat";
// import fileUpload from "./components/FileUpload"
import fileUpload from "./Components/FileUpload"
import display from "./Components/Display"
import modal from "./Components/Modal"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
