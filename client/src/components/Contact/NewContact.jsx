import React from 'react';
import Footer from "../Footer/Footer"
import FormWrapper from "../FormWrapper/FormWrapper"
import { Container, Row, Col, Card, CardTitle } from "reactstrap";

function NewContact() {
 
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
                <FormWrapper/>
            </Card>
            <br />
          </Col>
        </Row>
        <Footer/>
      </Container>
    )
}

export default NewContact