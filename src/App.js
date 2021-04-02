import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import list from "./utils/img/list.svg";
import arrowLeft from "./utils/img/arrow-left.svg";
import { Container } from "./components/Grid";


class App extends Component {

  state = {
    sidebarButton: false
  };

  componentDidMount() {
  }
  activeSidebar = (event) => {
    event.preventDefault();
    this.state.sidebarButton === true ? this.setState({ sidebarButton: false })
      :
      this.setState({ sidebarButton: true })
  };

  render() {
    return (
      <Router basename="/ghpages-portfolio">
        <div className="wrapper">
          <Container>
            <Sidebar
              icon={arrowLeft}
              alt="collapse"
              onClick={this.activeSidebar}
              title="Raymond He"
              email="Email"
              github="Github"
              linkedIn="LinkedIn"
              resume="Resume"
              linkOne="mailto:rayhe921@gmail.com"
              linkTwo="https://github.com/rayhe921"
              linkThree="https://www.linkedin.com/in/raymond-he-7086545a"
              linkFour="https://drive.google.com/file/d/1JUPCPCCRIVjmAfSGsqsHot-cjqi9ZTSb/view?usp=sharing"
              closeSide={this.state.sidebarButton}
            ></Sidebar>
          </Container>
          <main>
            <Navbar
              onClick={this.activeSidebar}
              icon={list}
              alt="Toggle"
            ></Navbar>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
};

export default App;
