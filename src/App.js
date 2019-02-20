import React, { Component } from "react";
import PortfolioNavbar from "../src/components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? (
      <div>
        <div className="fa fa-spinner" />
      </div>
    ) : (
      <div className="App">
        <PortfolioNavbar data={data} />
        <br />
        <Home data={data} title="Home" />
        <About data={data} title="About" />
        <Portfolio data={data} title="Portfolio" />
        <Contact data={data} title="Contact" />
        <br />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
