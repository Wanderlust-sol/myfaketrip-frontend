import React, { Component } from "react";
import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";

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
