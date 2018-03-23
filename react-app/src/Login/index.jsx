import React, { Component } from "react";
import { Modal, FormControl, FormGroup, Col, Row, ControlLabel, Button, Form, HelpBlock } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Joi from 'joi-browser';

const schema = Joi.object().keys({
  username: Joi.string().required().min(6).max(30).optional(),
  password: Joi.string().required().optional()

})

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      username: '',
      password: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state
    let input = {
      username: username,
      password: password
    }

    var res = Joi.validate(input, schema, { abortEarly: false })

    console.log(res.error.details)
    if (res.error != null) {

      let nameArr = ['username', 'password']

      res.error.details.map((item, key) => {
        let errors = this.state.errors;
        if (nameArr.indexOf(item.context.key) !== -1) {
          errors[item.context.key] = item.message
          this.setState({
            errors
          })
        }
      })
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
    let res = Joi.validate([name] = value)
    if (res.error != null) {
      let nameArr = ['username', 'password']
      res.error.details.map((item, key) => {
        console.log(item.context.key);
        let errors = this.state.errors;

        console.log('adcacxa');
        if (nameArr.indexOf(item.context.key) !== -1) {
          errors[item.context.key] = item.message
          this.setState({
            errors
          })
        }
      })
    }
  }
  render() {
    const { username, password } = this.state;

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header className="text-center">
            <Modal.Title>Login to Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form horizontal onSubmit={this.onSubmit} autoComplete='off'>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email/Username
                </Col>
                  <Col sm={12}>
                    <FormControl type="text" placeholder="Email/Username" value={username} name="username" onChange={this.handleChange} />
                    {this.state.errors.username &&
                      <HelpBlock>
                        {this.state.errors.username}
                      </HelpBlock>
                    }
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                  <Col sm={12}>
                    <FormControl type="password" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
                    {this.state.errors.password &&
                      <HelpBlock>
                        {this.state.errors.password}
                      </HelpBlock>
                    }
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={12}>
                    <Button type="submit" className="loginmodal-submit ">Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>
              <Col sm={12} className="login-help">
                Already Have Account <Link to="/sign-up">SignUp</Link>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
      </div >
    )
  }
}
export default Login;