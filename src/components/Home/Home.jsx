import React, { Component } from "react";
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    let data = this.props.data;
    return (
      <Container id="home-container">
        <Row>
          <Col md={{ size: 10, offset: 1 }} sm="12">
            <br />
            <Card body id="homeCard">
              <CardTitle>
                <h1>I am {data.name}</h1>
              </CardTitle>
              <CardText>
                <p>{data.aboutMe}</p>
              </CardText>
              <hr />
              <ul className="socialMediaLinks">
                {data.socialMedia &&
                  data.socialMedia.map(items => {
                    return (
                      <li key={items.name}>
                        <a href={items.link} target="_blank">
                          <i className={items.bigSize} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
