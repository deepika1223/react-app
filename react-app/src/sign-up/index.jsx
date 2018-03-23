import React, { Component } from "react";
import { Modal, FormControl, FormGroup, Col, Row, ControlLabel, Button, Form, HelpBlock } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import validate from 'react-joi-validation';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class SignUp extends Component {
  state = ({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmpassword: '',

  })

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, userName, email, password, confirmpassword } = this.state
    console.log(firstName, lastName, userName, email, password, confirmpassword)

    let input = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      confirmpassword: confirmpassword
    }
    alert("Data Inserted");
  }

  changeHandler = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { firstName, lastName, userName, email, password, confirmpassword } = this.state

    return (
      <div className="static-modal" >
        <Modal.Dialog>
          <Modal.Header className="text-center">
            <Modal.Title>Sign Up Your Account</Modal.Title>
          </Modal.Header>

          {this.state.isMailSent ? <div className="success"> Thank you for Submission!</div> : null}

          <Modal.Body>
            <Row>
              <Form horizontal onSubmit={this.onSubmit} autoComplete='false'>
                <FormGroup controlId="firstName">
                  <Col componentClass={ControlLabel} sm={12}>
                    First Name
                    <FormControl type="text"
                      value={firstName}
                      name="firstName"
                      onChange={this.changeHandler}
                      placeholder="Enter your first name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="lastName">
                  <Col componentClass={ControlLabel} sm={12}>
                    Last Name
                    <FormControl type="text"
                      value={lastName}
                      name="lastName"
                      onChange={this.changeHandler}
                      placeholder="Enter your last name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="userName">
                  <Col componentClass={ControlLabel} sm={12}>
                    User Name
                    <FormControl type="text"
                      value={userName}
                      name="userName"
                      onChange={this.changeHandler}
                      placeholder="Enter your user name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalemail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Email
                    <FormControl type="text"
                      value={email}
                      name="email"
                      onChange={this.changeHandler}
                      placeholder="Enter your email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalpassword">
                  <Col componentClass={ControlLabel} sm={12}>
                    Password
                    <FormControl type="password"
                      value={password}
                      name="password"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      onChange={this.changeHandler}
                      placeholder="Enter your password" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalconfirmpassword">
                  <Col componentClass={ControlLabel} sm={12}>
                    Confirm Password
                    <FormControl type="password"
                      value={confirmpassword}
                      name="confirmpassword"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      onChange={this.changeHandler}
                      placeholder="Re-enter your password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col sm={12}>
                    <Button bsStyle="primary" type="submit" className="loginmodal-submit">SIGN UP</Button>
                  </Col>
                </FormGroup>
              </Form>
              <Col sm={12} className="login-help sign_custom">
                <Link to="/login">Login </Link>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default graphql(gql`
mutation($input: signup){
  signup(input: $input)
}
`)(SignUp);