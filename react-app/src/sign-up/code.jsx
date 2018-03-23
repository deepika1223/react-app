import React, { Component } from "react";
import { Modal, FormControl, FormGroup, Col, Row, ControlLabel, Button, Form, HelpBlock } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import validate from 'react-joi-validation';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class SignUp extends Component {
    state = ({
        fname: '',
        lname: '',
        uname: '',
        email: '',
        password: '',
        confirmpassword: '',

    })

    onSubmit = (e) => {
        e.preventDefault();
        const { fname, lname, uname, email, password, confirmpassword } = this.state
        console.log(fname, lname, uname, email, password, confirmpassword)

        let input = {
            fname: fname,
            lname: lname,
            uname: uname,
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
        const { fname, lname, uname, email, password, confirmpassword } = this.state

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
                                <FormGroup controlId="formHorizontalfname">
                                    <Col componentClass={ControlLabel} sm={12}>
                                        First Name
                    <FormControl type="text"
                                            value={fname}
                                            name="fname"
                                            onChange={this.changeHandler}
                                            placeholder="Enter your first name" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontallname">
                                    <Col componentClass={ControlLabel} sm={12}>
                                        Last Name
                    <FormControl type="text"
                                            value={lname}
                                            name="lname"
                                            onChange={this.changeHandler}
                                            placeholder="Enter your last name" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontaluname">
                                    <Col componentClass={ControlLabel} sm={12}>
                                        User Name
                    <FormControl type="text"
                                            value={uname}
                                            name="uname"
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
    mutation($fname: String!, $lname: String!,
            $uname: String!, $email: String!, $password: String!){
             user(fname: $fname, lname: $lname, uname: $uname, email: $email, password: $password){
               id
             }
           }`)(SignUp);