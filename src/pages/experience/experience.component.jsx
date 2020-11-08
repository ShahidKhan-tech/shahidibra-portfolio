import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Training</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
                <h1>Internshala</h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                {/* <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div> */}
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Role:</strong> To learn full stack functionalities and implement them in a project.
                    <br />
                    <strong>Description:</strong> <strong>Developed & enhanced multiple features</strong> with full customizability option across web application. Debugging existing code to solve problems.A great environment was provided by internshala,there were videos,quizzes and many more.
                    <br />
                    <strong>Technology:</strong> HTML,CSS,javascript,PHP
                    <br />
                    <strong>Duration:</strong> June 2019 - August 2019
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
