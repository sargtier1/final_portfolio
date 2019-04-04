import React, { Component } from "react";
import { Form, TextArea, Message, Button, Icon } from "semantic-ui-react";

const options = [
  { text: "Business Consultation", value: "consultation" },
  { text: "Educational Services", value: "educational" },
  { text: "Employment Opportunity", value: "employment" },
  { text: "Freelance Commission", value: "freelance" },
  { text: "Just to say hi!", value: "hi" }
];

class FormWrapper extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      comments: "",
      formSuccess: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (
    e,
    { firstName, lastName, email, phoneNumber, comments, value }
  ) => {
    this.setState({
      [firstName]: value,
      [lastName]: value,
      [email]: value,
      [phoneNumber]: value,
      [comments]: value
    });
  };

  handleSubmit = () => {
      const { firstName, lastName, email, phoneNumber, comments } = this.state
    // send email to me with user info * from my business email
    // need to set up back end with node mailer
  }

  render() {
    return (
      <React.Fragment>
        <Form >
          <Form.Group>
            <Form.Input label="First name" placeholder="First Name" width={8} />
            <Form.Input label="Last Name" placeholder="Last Name" width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="E-Mail"
              placeholder="whatevs@something.com"
              width={8}
            />
            <Form.Input label="Phone" placeholder="(111) 111-1111" width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Select
              label="I'm Contacting You Becuase..."
              options={options}
              placeholder="Please Choose One"
              width={16}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Additional Comments"
              placeholder="Please Note Here."
              width={16}
            />
          </Form.Group>
          <Message
            success
            header="E-mail has been sent"
            content="Please give me a few business to reply!"
          />
          <br />
          <Button color="teal">
            {" "}
            <Icon.Group size="large">
              <Icon name="paper plane" />
            </Icon.Group>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormWrapper;
