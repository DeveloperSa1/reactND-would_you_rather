import React from "react";
import cx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Progress from "./utils/Progress";
import NavBar from '../layout/NavBar'
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const styles = ({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    root: {
      display: "block",
      marginTop: "2rem",
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
      marginBottom: 0,
    },
    answered: {
      fontFamily: family,
      fontSize: 16,
      marginBottom: 0,
      color: "red",
    },
    subheader: {
      fontFamily: family,
      fontSize: 14,
      color: palette.grey[600],
      letterSpacing: "1px",
      marginBottom: 4,
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
  };
};

class Results extends React.Component {
  render() {

    

    const { classes, user, question,history,isQuestion } = this.props;
    if(question === undefined) return <Redirect to='/not_found'/>
    const { author, optionOne, optionTwo, id, } = question;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const total = optionOneVotes + optionTwoVotes;
    console.log(this.props);
    return (
      <Grid container justify={"center"} spaceing={9}>
       <NavBar history={history} question={question.id}/>
        <Card className={classes.root}>
          <div className={classes.details}>
            <Grid item>
              <Card className={cx(classes.flex)} elevation={0}>
                <Avatar src={user.avatarURL} className={classes.avatar} />
                <Box>
                  <h3 className={classes.heading}>{author} Asks ..</h3>
                  <p className={classes.subheader}>Would you rather?</p>
                </Box>
              </Card>
              <Card className={cx(classes.card)} elevation={0} justify="center">
                <h3 className={classes.answered}>{`You answered : ${
                  question[user.answers[id]].text
                }`}</h3>

                <h3 className={classes.heading}>{optionOne.text}</h3>
                <Progress value={((optionOneVotes / total) * 100).toFixed(2)} />
                <p
                  className={classes.subheader}
                >{`${optionOneVotes} who voted for this option out of Total :${total}`}</p>

                <h3 className={classes.heading}>{optionTwo.text}</h3>
                <Progress value={((optionTwoVotes / total) * 100).toFixed(2)} />
                <p className={classes.subheader}>
                  {`${optionTwoVotes} who voted for this option out of Total :${total}`}
                </p>

                {/* TODO : Change name of consts */}
              </Card>
            </Grid>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}
            onClick={this.props.history.goBack}
          >
            Back to Home
          </Button>
        </Card>
      </Grid>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.questionId;
  const question = questions[id];
  const user = users[authedUser];
  return {
    user,
    question,
  };
}
export default connect(mapStateToProps)(withStyles(styles)(Results));
