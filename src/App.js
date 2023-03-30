import React from "react";

import VisNetwork from "./components/vis-network";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <VisNetwork />
    </div>
  );
}

export default App;
