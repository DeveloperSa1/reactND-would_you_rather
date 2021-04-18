import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/users";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = ({ theme }) => {
  return {
    root: {
      maxWidth: 345,
      marginBottom: "1rem",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  };
};

class Questions extends React.Component {
  state = {
    value: "",
    error: false,
  };

  handleChange = (event) => {
    this.setState({
      value: event,
      error: false,
      helperText: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    const { dispatch, question, authedUser } = this.props;
    const { id } = question;
    if (!value || value === "") {
      this.setState({
        error: true,
        helperText: "Please Select one option!",
      });
    } else {
      dispatch(handleSaveAnswer(authedUser, id, value));
      this.props.history.push(`/question/${id}`);
    }
  };

  render() {
    const { error, value, helperText } = this.state;
    const { classes, question, user } = this.props;
    const { author, optionOne, optionTwo, date, id } = question;
    const isAnswered = Object.keys(user.answers).includes(id);
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              src={author.avatarURL}
              aria-label="recipe"
              className={classes.avatar}
            ></Avatar>
          }
          title={`${author.name} Asks you`}
          subheader={date}
        />

        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Would you rather?
          </Typography>

          {!isAnswered ? (
            <div>
              <form onSubmit={this.handleSubmit}>
                <FormControl
                  component="fieldset"
                  error={error}
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Would you rather ?</FormLabel>
                  <RadioGroup
                    aria-label="Poll"
                    name="Poll"
                    value={value}
                    onChange={(e) => this.handleChange(e.currentTarget.value)}
                  >
                    <FormControlLabel
                      value="optionOne"
                      control={<Radio />}
                      label={optionOne.text}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio />}
                      label={optionTwo.text}
                    />
                  </RadioGroup>
                  <FormHelperText>{helperText}</FormHelperText>

                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                  >
                    Check Answer
                  </Button>
                </FormControl>
              </form>
            </div>
          ) : (
            <div>
              <List>
                <ListItem divider>
                  <ListItemText primary={optionOne.text} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary={optionTwo.text} />
                </ListItem>
                <Divider />
              </List>
              <Link to={`/question/${id}`}>
                <Button variant="contained" color="primary">
                  Show the Result
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    user: users[authedUser],
    question: {
      id: id,
      author: users[question.author],
      optionOne: {
        text: question.optionOne.text,
      },
      optionTwo: {
        text: question.optionTwo.text,
      },
      date: moment(question.timestamp).format("ll"),
    },
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Questions));
