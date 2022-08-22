import React from "react";
import "./App.css";
import Album from "./components/album";
import BasicGrid from "./components/basicgrid";
import Header from "./components/header";
import { Swipeimage } from "./components/swaipeimage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Maincontent /> */}
      <Swipeimage />
      <Album />
      {/* <BasicGrid /> */}
    </div>
  );
}

export default App;
