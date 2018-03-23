import React, { Component } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Navbar from '../navbar'
// import axios from 'axios'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, withApollo } from 'react-apollo'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  // componentWillMount = async () => {
  //   let response = await this.props.client.query({
  //     query: users
  //   })
  //   this.setState({
  //     data: response.data.users
  //   })
  // }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    return [
      <Navbar />,
      <div className="container mt-5">
        <ReactTable
          key={this.state.data.id}
          data={this.state.data}
          columns={[
            {
              Header: "First Name",
              id: "firstName",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: "lastName"
            },
            {
              Header: "User Name",
              id: "userName",
              accessor: "userName"
            },
            {
              Header: "Email",
              id: "email",
              accessor: "email"
            },
            {
              Header: "Password",
              id: "password",
              accessor: "password"
            }
          ]}
        />
      </div>
    ]

  }
}

export default graphql(gql`
query{
  users{
    firstName,
    lastName,
    userName,
    email
  }
}
`)(Dashboard);
