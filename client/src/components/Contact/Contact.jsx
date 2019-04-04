import React from "react";
import Footer from '../Footer/Footer'
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import "../../components/Footer/Footer";

function Contact(props) {
  let data = props.data;
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
                <p>{data.tagline}</p>
              </div>
            </CardText>
          </Card>
          <br />
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
}

export default Contact;
