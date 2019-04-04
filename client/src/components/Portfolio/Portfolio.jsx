import React from "react";
import { Container, Row, Col, Card, CardTitle, Button } from "reactstrap";
import "./Portfolio.css";

function Portfolio(props) {
 
    let data = props.data;
    return (
      <Container id="portfolio-container">
        <Row>
          <Col md={{ size: 10, offset: 1 }} sm="12">
            <br />
            <Card id="portfolio-card">
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
                              outline
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
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }


export default Portfolio;
