import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
