import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core/";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Result from "./components/Result";
import NewQuestion from "./components/NewQuestion";
import Dashboard from "./components/Dashboard";
import LeaderBoard from "./components/LeaderBoard";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const authedUser = this.props.authedUser;
    return (
      // <Router>
      <Grid container spacing={9} justify="space-between" direction="column">
        <BrowserRouter>
          {authedUser === null ? (
            <>
              <Redirect to="/" />
              <Switch>
                <Route path="/" exact component={Login} />
              </Switch>
            </>
          ) : (
            <Fragment>
              <Grid item>
                <Route
                  path="/"
                  render={(history) => (
                    <>
                      <Redirect from="/" to="/home" />
                    </>
                  )}
                ></Route>
                <Switch>
                  <Route
                    path="/home"
                    component={Dashboard}
                    history={this.props.history}
                  />
                  <Route
                    path="/add"
                    component={NewQuestion}
                    history={this.props.history}
                  />
                  <Route
                    path="/leaderboard"
                    component={LeaderBoard}
                    history={this.props.history}
                  />
                  <Route
                    path="/question/:questionId"
                    component={Result}
                    history={this.props.history}
                  />
                </Switch>
              </Grid>
            </Fragment>
          )}
        </BrowserRouter>
      </Grid>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
