import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import LandingPage from "./components/landingpage/LandingPage";
import ListNFT from "./components/listNft/listNft";

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <HomePage />
        <ListNFT />
      </div>
    );
  }
}

export default App;
