import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/auth";

const styles = (theme) => ({
  paper: {
    marginTop: "9rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    minWidth: "20rem",
  },
});

class Login extends React.Component {
  state = {
    user: "", 
  };

  handleChange = (value) => {
    this.setState(() => ({
      user: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthUser(this.state.user));
    console.log(this.state.user);
  };

  render() {
    const { users, classes,authedUser } = this.props;
    console.log(authedUser);

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Typography component="h3" variant="h6">
            You need to sign in to play
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Choose an Account to sign in
          </Typography>

          <FormControl className={classes.formControl}>
            <Select
              native
              value={this.state.selectedUser}
              onChange={(e) => this.handleChange(e.target.value)}
              inputProps={{
                name: "user",
                id: "authed-user",
              }}
              fullWidth
            >
              <option value="" />
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Select>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
          </FormControl>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));
