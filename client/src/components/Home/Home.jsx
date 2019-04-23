import React from "react";
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import "./Home.css";

function Home(props) {
  let data = props.data;
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
              {data.aboutMe}
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

export default Home;
