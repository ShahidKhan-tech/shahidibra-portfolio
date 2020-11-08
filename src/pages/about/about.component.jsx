import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import cvphoto from '../../assets/img/cvphoto.jpg';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                {/* <Image className="profile justify-content-end" alt="profile" src={"https://drive.google.com/file/d/1MRcYoUjMz-UvdnJkQxYHyEA0DXir74DS/view?usp=drivesdk"} thumbnail fluid /> */}
                <img src={cvphoto} width="700" height="500"/>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Shahid Khan</strong>
                <br />A passionate programmer and a learner, born and brought up in India. I am a Mean Stack Web Developer with HTML,CSS,javascript,React.js, Redux, Express.js and  Node.js as my tech stack.
                <br />
                In 2017,I started my b.tech journey and took mean stack development as my minor and till now i have enjoyed it the most.
                <br />
                As a web developer, I have worked on so many projects and i always try to develop something that satisfies me.
                <br />
                Apart from this,I am the one who motivates others to code and help them in all possible ways.Coding is like "water" for me,untill I won't code a kind of thirst will be left somewhere inside me.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1C8MqUlf7zY0S5XQ_iAiMiBce8Ia-1wCC/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ShahidKhan-tech" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/shahid--khan" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
