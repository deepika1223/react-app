import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid } from "react-bootstrap";

import { graphql, compose, withApollo } from 'react-apollo';
import { gql } from "graphql-tag";
import Login from './Login';
import SignUp from './sign-up';
import Dashboard from './Dashboard';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          {/* <Grid> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* </Grid> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Login} />
//       </Switch>
//     </Router>
//   )
// }
// export default App;
