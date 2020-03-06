import React, { Component } from "react";
import Header from "../../../src/components/Header/Header";
import Footer from "../../../src/components/Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
