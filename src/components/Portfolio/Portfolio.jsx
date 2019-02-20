import React, { Component } from "react";
import { Container, Row, Col, Card, CardTitle, Button } from "reactstrap";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    let data = this.props.data;
    return (
      <Container id="portfolio-container">
        <Row>
          <Col md={{ size: 10, offset: 1 }} sm="12">
            <br />
            <CardTitle>
              <h1>Projects</h1>
            </CardTitle>
            <hr />
            <div
              id="portfolio-horizontal-div"
              className="fluid flex-row flex-nowrap"
            >
              {data.projects &&
                data.projects.map(items => {
                  return (
                    <div className="projectCards">
                      <Card body>
                        <CardTitle>
                          <h3>{items.name}</h3> <p>{items.desc}</p>
                          <Button
                            id="github-btns"
                            color="info"
                            href={items.link}
                            target="_blank"
                          >
                            Github Repository
                          </Button>
                        </CardTitle>
                        <img
                          src={items.src}
                          alt={items.name}
                          style={{ height: "100%", width: "100%" }}
                          className="projectPics"
                        />
                      </Card>
                      <br />
                    </div>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
