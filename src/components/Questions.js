import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
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
  render() {
    const { classes, question, user } = this.props;
    const { author, optionOne, optionTwo, date, id } = question;
    const isAnswered = Object.keys(user.answers).includes(id);
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              src={user.avatar}
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
          {!isAnswered ? (
            <Link to={`/question/${id}`}><Button variant="contained" color="primary">
            Answer That
          </Button></Link>
            
          ) : (
            
            <Link to={`/question/${id}`}><Button variant="contained" color="primary">
            Show the Result
          </Button></Link>
          )}
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
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
      date: moment(question.timestamp).format("ll")
    },
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Questions));