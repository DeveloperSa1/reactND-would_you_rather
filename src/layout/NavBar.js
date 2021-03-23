import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { positions, right } from '@material-ui/system';



const styles = () => ({
  root: {
    flexGrow: 1,
  },
  button : {
    marginLeft : "auto"
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
    const {classes} = this.props;
    const {activeTab} = this.state
    return (
      <AppBar>
      <Paper className={classes.root}>
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
      {/* <Button className={classes.button}> Login </Button> */}
    </Tabs>
    
    
  </Paper>
      </AppBar>
    );
  
  
  }
}


// export default function DisabledTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

export default withStyles(styles)(NavBar) ;