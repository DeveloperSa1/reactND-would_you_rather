import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthUser } from "../actions/auth";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Dashboard from "../components/Dashboard";
import LeaderBoard from "../components/LeaderBoard";
import NewQuestion from "../components/NewQuestion";
import Avatar from "@material-ui/core/Avatar";
import { positions, right } from "@material-ui/system";

const styles = (theme) => ({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    gap: "1rem",
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginTop: "3px",
  },
  flex: {
    justifyContent: "center",
  },
  user: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },
});

class NavBar extends React.Component {
  handleLogOut = () => {
    const { dispatch , history} = this.props;
    dispatch(setAuthUser(null));
    localStorage.removeItem("user");
    console.log("log out success:", this.props.authedUser);
    history.push('/')
  };
  render() {
    const { classes, authedUser, history, questions,question} = this.props; 
    const routes = ["/", "/add", "/leaderboard",`/question/${question}`];
    return (
      <>
        <AppBar color="transparent" className={classes.root}>
          <Tabs
            value={
              history.location.pathname === `/question/${question}`
                ? false
                : history.location.pathname
            }
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{ gap: "1rem" }}
          >
            <Tab label="Home" component={Link} to="/" value={routes[0]} />
            <Tab
              label="New Question"
              component={Link}
              to="/add"
              value={routes[1]}
            />
            <Tab
              label="Leaderboard"
              component={Link}
              to="/leaderboard"
              value={routes[2]}
            />
             {/* <Tab
              label="Leaderboard"
              component={Link}
              to={`/question/${questions[question]}`}
              value={routes[3]}
            /> */}
          </Tabs>
          <div className={classes.user}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<VerifiedUserIcon />}
            >
              Hello , {authedUser}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<ExitToAppIcon />}
              onClick={this.handleLogOut}
            >
              Log out
            </Button>
          </div>
        </AppBar>
      </>
    );
  }
}

const mapStateToProps = ({ authedUser, users,questions }) => {
  // const question = questions.id
  return {
    questions,
    authedUser,
    user: users[authedUser],
  };
};
export default connect(mapStateToProps)(withStyles(styles)(NavBar));
