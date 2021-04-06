import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";

import Avatar from '@material-ui/core/Avatar';
import { positions, right } from '@material-ui/system';



const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  button : {
    marginLeft : "auto"
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginTop : "3px"
  },
  flex : {
    justifyContent : "center"
  },
  user : {
    display : "flex",
    justifyContent : "space-between",
    gap : "1rem"
  }
});

 class NavBar extends React.Component {

  state = {
    activeTab : 0,
  }



handleChange = (e,newValue) => {

  this.setState({
    activeTab : newValue
  })
}

  render() {
    const {classes,authedUser} = this.props;
    const {activeTab} = this.state
    return (
      <AppBar>
      <Paper className={classes.root}>
        <div className={classes.flex}></div>
    <Tabs
    value= {activeTab}
    onChange = {this.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      
      {/* style={{position : 'absolute', right : 0}} */}
      
      <Tab label="Questions" />
      <Tab label="New Question"  />
      <Tab label="Leader Board"  />
      <div className={classes.user}>
      
      <Avatar alt={authedUser} src="/static/images/avatar/1.jpg" className={classes.avatar} />
      <Typography variant="h6" color="primary">
        Hello {authedUser}
      </Typography>
      </div>
    </Tabs>
    
    
    
    
  </Paper>
      </AppBar>
    );
  
  
  }
}


const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(withStyles(styles)(NavBar));