import React from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {formatQuestion} from '../utils/_helpers'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Slider from '@material-ui/core/Slider';
import Progress from './utils/Progress'


const styles = (({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    root: {
      display: 'block',
 
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    card: {
      display: 'block',
      padding: spacing(2),
      minWidth: 288,
      borderRadius: 12,
      margin : "1rem",
      borderBottom : "1px solid red",
      boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
      '& > *:nth-child(1)': {
        marginRight: spacing(2),
      },
      '& > *:nth-child(2)': {
        flex: 'auto',
      },
      
    
    },

    flex: {
        display: 'flex',
        padding: spacing(2),
        minWidth: 288,
        borderRadius: 12,
        margin : "1rem",
        borderBottom : "1px solid red",
        boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
        '& > *:nth-child(1)': {
          marginRight: spacing(2),
        },
        '& > *:nth-child(2)': {
          flex: 'auto',
        },
        
      
      },

    avatar: {},
    heading: {
      fontFamily: family,
      fontSize: 16,
      marginBottom: 0,
    },
    subheader: {
      fontFamily: family,
      fontSize: 14,
      color: palette.grey[600],
      letterSpacing: '1px',
      marginBottom: 4,
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
    
  };
});

// const useSliderStyles = makeStyles(() => ({
//   root: {
//     height: 4,
//   },
//   rail: {
//     borderRadius: 10,
//     height: 4,
//     backgroundColor: 'rgb(202,211,216)',
//   },
//   track: {
//     borderRadius: 10,
//     height: 4,
//     backgroundColor: 'rgb(117,156,250)',
//   },
//   thumb: {
//     display: 'none',
//   },
// }));

class Results extends React.Component {
  render() {
    const {classes} = this.props
    const {avatar,name,optionOne,optionTwo} = this.props.question
    console.log(this.props)
  return (
    <Grid container justify={'center'} space={9} > 
      <Card className={classes.root}>
      <div className={classes.details}>
    <Grid  item >
    <Card className={cx(classes.flex)} elevation={0}>
      <Avatar src={'https://i.pravatar.cc/300'} className={classes.avatar} />
      <Box>
        <h3 className={classes.heading}>{name} Asks ..</h3>
        <p className={classes.subheader}>Would you rather?</p>
      </Box>
      
    </Card>
    <Card className={cx(classes.card)} elevation={0} justify="center">
      
        <h3 className={classes.heading}>{optionOne.text}</h3>
        <Progress />
      
        <h3 className={classes.heading}>{optionTwo.text}</h3>
       <Progress />
     
      
    </Card>
{/* 
    <Card className={cx(classes.card)} elevation={0}>
    
      
      
    </Card> */}

    </Grid>
    </div>
    </Card>
   
    </Grid>
 

 )
}
}



function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id];

  return {
      authedUser,
      question : formatQuestion(question,users[question.author],authedUser),
     
  }
}
export default connect(mapStateToProps)(withStyles(styles)(Results)) ;

// Turn it to class .. Done
// Finish manging the App ..
// Functionality Login And When AnswerSubmitted
// React Router

