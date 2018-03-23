import React, { Component } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Navbar from '../navbar'
// import axios from 'axios'
import { compose, withApollo } from 'react-apollo'
import { USER_LIST } from '../query';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentWillMount = async () => {
        let response = await this.props.client.query({
            query: USER_LIST
        })
        this.setState({
            data: response.data.users
        })
    }
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
                        }
                    ]}
                />
            </div>
        ]

    }
}

export default compose(withApollo)(Dashboard);
