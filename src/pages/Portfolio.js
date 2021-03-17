import React, { Component } from "react";
import VertCard from "../components/VertCard";
import {Container, Row} from "../components/Grid";
import projects from "../utils/projects.json";
import "./portfolioStyle.css";

class Portfolio extends Component {

    state={
        projects
    }
  // Handles updating component state when the user types into the input field

  render() {
    return (
      <Container>
        <Row>
      {this.state.projects.map(projects => (
          <VertCard
            key={projects.id}
            image={projects.image}
            title={projects.title}
            summary={projects.summary}
            githubLink={projects.githubLink}
            projectLink={projects.projectLink}
          ></VertCard>
      ))}
      </Row>
      </Container>
    );
  }
}

export default Portfolio;
