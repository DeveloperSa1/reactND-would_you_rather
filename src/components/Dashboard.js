import React from 'react';
import PropTypes from 'prop-types';
import  withStyles  from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Questions from './Questions'
import Result from './Result'
import {connect} from "react-redux"

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div key={index}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box key={index} p={3}>
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
  


class Dashboard extends React.Component {

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
        const {classes,unansweredIds,answeredIds} = this.props
        console.log(unansweredIds,answeredIds);
        return (
      
      
       <Box>
        <Tabs value={activeTab} onChange={this.handleChange} centered >
        <Tab label="UnAnswered" {...a11yProps(0)} />
          <Tab label="Answered" {...a11yProps(1)} />
          
          
        </Tabs>
        

      <TabPanel  value={activeTab} index={0}>
      <Grid container spacing={4} justify={'center'} > 
<Grid className={classes.card} item >
{unansweredIds.map((id)=> (
  <Questions key={id} id={id} />
))}  



    </Grid>
    </Grid>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
      <Grid container spacing={4} justify={'center'} > 
<Grid className={classes.card} item >

{answeredIds.map((id)=> (
  <Questions key={id} id={id} />
))}  

    </Grid>
    </Grid>
      </TabPanel>
      </Box>

        )
    }
}

const mapStateToProps = ({questions, users, authedUser}) => {
  const qids = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  return {
    unansweredIds: qids.filter((id) => {
      return !Object.keys(users[authedUser].answers).includes(id)
    }),
    answeredIds: qids.filter((id) => {
      return Object.keys(users[authedUser].answers).includes(id)
    })
  }
}
export default connect(mapStateToProps)(withStyles(styles)(Dashboard)) ;

