import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import Footer from "../Footer/Footer"

function NewContact(props) {
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
                
              </CardText>
            </Card>
            <br />
          </Col>
        </Row>
        <Footer/>
      </Container>
    )
}

export default NewContact