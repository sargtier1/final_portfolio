import React, { Component } from "react";
import { Form, TextArea, Message, Button, Icon } from "semantic-ui-react";
import axios from "axios";

class FormWrapper extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      options: "",
      comments: "",
      sent: false,
      formSuccess: false,
      formMissing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange = (
    e,
    { firstName, lastName, email, phoneNumber, comments, value }
  ) => {
    e.preventDefault();
    this.setState({
      [firstName]: value,
      [lastName]: value,
      [email]: value,
      [phoneNumber]: value,
      [comments]: value
    });
  };

  handleSelectChange = (e, { value }) => {
    this.setState({ options: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.formValidation()) return;

    if (this.state.formMissing === false) {

      let data = {
        fistName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        number: this.state.phoneNumber,
        options: this.state.options,
        comments: this.state.comments
      };

      axios
        .post("/send-email", data)
        .then(res => {
          res.json()
          console.log(res.json)
          this.setState({ sent: true }, this.resetForm());
        })
        .catch(err => {
          console.log("Message not sent");
        });
    }
  };

  formValidation = () => {
    // display form error for missing fields
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === "" ||
      this.state.comments === ""
    ) {
      this.setState({
        formMissing: true
      });
      return;
    }
    //  Email Check
    const characterCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = characterCheck.test(String(this.state.email).toLowerCase());
    if (!isEmail) {
      this.setState({
        formMissing: true
      });
      return;
    }
    // Phone Number Check
    if (isNaN(this.state.phoneNumber)) {
      this.setState({
        formMissing: true
      });
      return;
    }
    return false;
  };

  resetForm = () => {
    this.setState({ 
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      options: "",
      comments: "",
      formMissing: false,
      formSuccess: true
     });
  };

  render() {
    const options = [
      { key: "B", text: "Business Consultation", value: "consultation" },
      { key: "Ed", text: "Educational Services", value: "educational" },
      { key: "Em", text: "Employment Opportunity", value: "employment" },
      { key: "F", text: "Freelance Commission", value: "freelance" },
      { key: "H", text: "Just to say hi!", value: "hi" }
    ];
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
              label="I'm Contacting You Because..."
              options={options}
              placeholder="Please Choose One"
              width={16}
              onChange={this.handleSelectChange}
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
          <Button type="submit" color="teal" onClick={this.handleSubmit}>
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
