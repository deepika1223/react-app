import React from 'react';
import { Row, Col, Grid, FormControl, ButtonToolbar, FormGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

class Signup extends React.Component {
constructor(props){
  super(props);
  this.state ={
       fname: "",
       lname: "",
       uname: "",
       email: "",
       password: "",
       confpassword: ""
  };
}

  render() {
const Form:any = styled.form`
      border: 1px solid #eee;
      padding: 2em;
      background: #fafafa;
    `;
const Paragraph = styled.p`
      font-size: 18px;
      text-align: left;
`;
const Head = styled.h2`
      padding: 2em;
      font-size: 1.8em;
      font-family: initial;
`;
    return (

      <div className="Containers">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Head><h2>Create Your Account</h2></Head>

            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="fname">
                  <Paragraph>First Name:</Paragraph>
                  <FormControl 
                    type="text"
                    placeholder="Enter your first name"
                    value= {this.state.fname}></FormControl>
                </FormGroup>
                  <br />

                <FormGroup controlId="lname">
                  <Paragraph>Last Name:</Paragraph>
                  <FormControl type="text" placeholder="Enter your last name"></FormControl>
                </FormGroup>
                  <br />

                <FormGroup controlId="uname">
                  <Paragraph>User Name:</Paragraph>
                  <FormControl type="text" placeholder="Enter your user name"></FormControl>
                </FormGroup>
                  <br />

                <FormGroup controlId="email">
                  <Paragraph>Email Id:</Paragraph>
                  <FormControl type="email" placeholder="Enter you email"></FormControl>
                </FormGroup>
                  <br />

                <FormGroup controlId="password">
                  <Paragraph>Password:</Paragraph>
                  <FormControl type="password" placeholder="Enter password"></FormControl>
                </FormGroup>
                  <br />

                <FormGroup controlId="confpassword">
                  <Paragraph>Confirm Password:</Paragraph>
                  <FormControl type="password" placeholder="Confirm password"></FormControl>
                </FormGroup>
                  <br />
                 
                <ButtonToolbar>
                  <Button bsStyle="success" bsSize="large" block>Submit</Button>
                </ButtonToolbar>

              </Form>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Signup;