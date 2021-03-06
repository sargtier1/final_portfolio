import React, { Component } from "react";
import PortfolioNavbar from "../src/components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
// import NewContact from "./components/Contact/NewContact"
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import LoadingIcon from "./components/LoadingIcon";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 250);
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
        <Home data={data} title="Home" subtitle={Home} id="home" />
        <About data={data} title="About" subtitle={About} id="about" />
        <Portfolio
          data={data}
          title="Portfolio"
          subtitle={Portfolio}
          id="portfolio"
        />
        <Contact/>
        {/* <Contact data={data} title="Contact" subtitle={Contact} id="contact" /> */}
        {/* <Footer data={data} title="Footer" /> */}
      </div>

      
    );
  }
}

export default App;
