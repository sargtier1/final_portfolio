import React, { Component } from "react";
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import "./Contact.css";

class Contact extends Component {
  render() {
    let data = this.props.data;
    return (
      <Container id="contact-container">
        <Row>
          <Col md={{ size: 10, offset: 1 }} sm="12">
            <br />
            <Card body id="contact-card">
              <CardTitle>
                <h1>Contact</h1>
              </CardTitle>
              <hr />
              <CardText>
                <div>
                  <p>
                    {data.tagline}
                  </p>
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
