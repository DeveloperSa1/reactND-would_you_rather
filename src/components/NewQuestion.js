import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/users";
import NavBar from "../layout/NavBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const styles = ({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    root: {
      display: "block",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    card: {
      display: "block",
      padding: spacing(2),
      minWidth: 288,
      borderRadius: 12,
      margin: "1rem",
      borderBottom: "1px solid red",
      boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
      "& > *:nth-child(1)": {
        marginRight: spacing(2),
      },
      "& > *:nth-child(2)": {
        flex: "auto",
      },
    },

    paper: {
      marginTop: spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: spacing(1),
      backgroundColor: palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: spacing(1),
    },
    submit: {
      margin: spacing(3, 0, 2),
    },

    flex: {
      display: "flex",
      padding: spacing(2),
      minWidth: 288,
      borderRadius: 12,
      margin: "1rem",
      borderBottom: "1px solid red",
      boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
      "& > *:nth-child(1)": {
        marginRight: spacing(2),
      },
      "& > *:nth-child(2)": {
        flex: "auto",
      },
    },

    avatar: {},
    heading: {
      fontFamily: family,
      fontSize: 16,
      marginBottom: "1rem",
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
    button: {
      marginTop: "1rem",
      fontSize: 14,
    },
  };
};

class NewQuestion extends React.Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    error: false,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, dispatch, history } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    const author = authedUser;
    if (optionOneText === "" && optionTwoText === "") {
      this.setState({
        error: true,
      });
    } else {
      dispatch(handleSaveQuestion({ author, optionOneText, optionTwoText }));
      history.push("/home");
    }
  };

  render() {
    const { classes, history } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    return (
      <>
        <NavBar history={history} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <QuestionAnswerIcon />
            </Avatar>
            <Typography component="h6" variant="h5">
              Would you Rather ..
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="option one"
                label="option one"
                name="optionOneText"
                autoFocus
                value={optionOneText}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="optionTwoText"
                label="option two"
                type="option two"
                id="option two"
                value={optionTwoText}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(NewQuestion));
