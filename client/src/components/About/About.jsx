import React from "react";
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import { Icon, Image } from "semantic-ui-react";
import "./About.css";

function About(props) {
    let data = props.data;
    return (
      <Container id="about-container">
        <Row>
          <Col md={{ size: 10, offset: 1 }} sm="12">
            <br />
            <CardTitle>
              <h1>About Me</h1>
            </CardTitle>
            <hr />
          </Col>
        </Row>
        <Row>
          <br />
          <Col md={{ size: 4, offset: 1 }} sm={{ size: 12 }}>
            <br />
            <Card id="profileCard" body>
              <Image id="headshot" src={data.headshot} />
              <br />
              <CardTitle>
                <p>{data.role}</p>
              </CardTitle>
              <CardText>
                <p>
                  <Icon name="map pin" />
                  {data.location}
                </p>
                <p id="willMove">
                  <Icon name="map" />
                  Looking for the DFW area
                </p>
              </CardText>
            </Card>
          </Col>

          <Col md={{ size: 6 }} sm={{ size: 12 }}>
            <br />
            <Card body>
              <CardTitle id="frontEnd">
                <h5>Front-End Technologies</h5>
              </CardTitle>
              <hr />
              <p>{data.frontSkills}</p>
            </Card>
            <br />
            <Card body>
              <CardTitle id="backEnd">
                <h5>Back-End Technologies</h5>
              </CardTitle>
              <hr />
              <p>{data.backSkills}</p>
            </Card>
            <br />
            <Card body>
              <CardTitle id="skills">
                <h5>Other Skills</h5>
              </CardTitle>
              <hr />
              <p>{data.skills}</p>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

export default About;
