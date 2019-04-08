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
      options: "",
      phoneNumber: "",
      comments: "",
      formSuccess: false,
      formMissing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (
    e,
    { firstName, lastName, email, phoneNumber, options, comments, value }
  ) => {
    e.preventDefault();
    this.setState({
      [firstName]: value,
      [lastName]: value,
      [email]: value,
      [phoneNumber]: value,
      [options]: value,
      [comments]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.formValidation()) return;

    if (this.state.formMissing === false) {
      this.setState({ formSuccess: true });
    }
  };

  formValidation = () => {
    // display error message for missing fields
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === "" ||
      this.state.business === "" ||
      this.state.comments === ""
    ) {
      this.setState({
        formMissing: true
      });
      return;
    }
    // Name Check
    if (this.state.firstName === "") {
      this.setState({
        formMissing: true
      });
      return true;
    }
    if (this.state.firstName === "") {
      this.setState({
        formMissing: true
      });
      return true;
    }
    //  Email Check
    const characterCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = characterCheck.test(String(this.state.email).toLowerCase());
    if (!isEmail) {
      this.setState({
        formMissing: true
      });
      return true;
    }
    // Phone Number Check
    if (isNaN(this.state.phoneNumber)) {
      this.setState({
        formMissing: true
      });
      return true;
    }
    // Business Affiars Check
    if (this.state.business === "") {
      this.setState({
        formMissing: true
      });
      return true;
    }
    // Comments Check
    if (this.state.comments === "") {
      this.setState({
        formMissing: true
      });
      return true;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <Form
          onSubmit={this.handleSubmit}
          success={this.state.formSuccess}
          error={this.state.formMissing}
        >
          <Form.Group>
            <Form.Input
              label="First name"
              placeholder="First Name"
              width={8}
              onChange={e => this.setState({ firstName: e.target.value })}
              error={this.state.formMissing}
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              width={8}
              onChange={e => this.setState({ lastName: e.target.value })}
              error={this.state.formMissing}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="E-Mail"
              placeholder="whatevs@something.com"
              width={8}
              onChange={e => this.setState({ email: e.target.value })}
              error={this.state.formMissing}
            />
            <Form.Input
              label="Phone"
              placeholder="(111) 111-1111"
              width={8}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
              error={this.state.formMissing}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              label="I'm Contacting You Becuase..."
              options={options}
              placeholder="Please Choose One"
              width={16}
              onChange={e => this.setState({ options: e.target.options })}
              error={this.state.formMissing}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Additional Comments"
              placeholder="Please Note Here."
              width={16}
              onChange={e => this.setState({ comments: e.target.value })}
              error={this.state.formMissing}
            />
          </Form.Group>
          <Message
            success
            header="E-mail has been sent"
            content="Please give me a few business to reply!"
          />
          <Message
            error
            header="Uh-Oh!"
            content="The information you entered is either missing or not the correct input."
          />
          <br />
          <Button
            type="submit"
            color="teal"
            onClick={() => this.handleSubmit()}
          >
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
