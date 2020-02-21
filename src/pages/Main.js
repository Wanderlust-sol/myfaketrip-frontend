import React, { Component } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Body />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
