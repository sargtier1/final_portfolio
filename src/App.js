import React, { Component } from "react";
import PortfolioNavbar from "../src/components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingIcon from "./components/LoadingIcon";
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    isLoading: true
  };
}

  componentDidMount() {
    setTimeout (() => {this.setState({ isLoading: false })}, 250) 
  }


  render() {
    return this.state.isLoading ? (
      <div>
        <LoadingIcon />
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
