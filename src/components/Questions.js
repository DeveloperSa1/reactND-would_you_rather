import React from 'react';
import PropTypes from 'prop-types';
import  withStyles  from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Question from './Question'
import Result from './Result'
import {connect} from "react-redux"

// console.log('Prop-tyopes', PropTypes)
// console.log('withStyles', withStyles)
// console.log('Tabs', Tabs)
// console.log('Tab', Tab)
// console.log('Typography', Typography)
// console.log('Box', Box)
// console.log('Grid', Grid)
// console.log('UnAnswered', UnAnswered)
// console.log('Answered', Answered)
// console.log('connect', connect)








const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const styles = theme => ({
    root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
          },
          card: {
            border: '2px solid',
            borderColor: '#E7EDF3',
            borderRadius: 16,
            transition: '0.4s',
            '&:hover': {
              borderColor: '#5B9FED',
            },
          },
  });
  


class Questions extends React.Component {

    state = {
        activeTab : 0,
      }

      
handleChange = (e,newValue) => {

    this.setState({
      activeTab : newValue
    })
  }

    render() {
        const {activeTab} = this.state
        const {classes,unanswered,answered} = this.props
        console.log(answered,unanswered);
        return (
      
      
       <Box>
        <Tabs value={activeTab} onChange={this.handleChange} centered >
        <Tab label="UnAnswered" {...a11yProps(0)} />
          <Tab label="Answered" {...a11yProps(1)} />
          
          
        </Tabs>
        

      <TabPanel value={activeTab} index={0}>
      <Grid container spacing={4} justify={'center'} > 
<Grid className={classes.card} item >
{unanswered.map((id)=> (
  <Question key={id} id={id} />
))}


    </Grid>
    </Grid>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
      <Grid container spacing={4} justify={'center'} > 
<Grid className={classes.card} item >

{answered.map((id)=> (
  <Result key={id} id={id} />
))}

    </Grid>
    </Grid>
      </TabPanel>
      </Box>

        )
    }
}
function mapStateToProps ({ questions, authedUser, users }) {
  const  answered = Object.keys(users[authedUser].answers).sort((a,b)=>questions[b].timestamp-questions[a].timestamp);
  const unanswered = Object.keys(questions).filter(q => ! answered.includes(q)).sort((a,b)=>questions[b].timestamp-questions[a].timestamp);

  return {
       answered,
      unanswered
  }
}
export default connect(mapStateToProps)(withStyles(styles)(Questions)) ;

