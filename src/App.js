import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Login from './components/Login'
import Result from './components/Result'
import Questions from './components/Questions'
// import Result from './components/Result'
import {connect} from 'react-redux'
import {handleInitialData} from './actions/shared'


 class App extends Component {
   componentDidMount(){
     this.props.dispatch(handleInitialData())
   }
  render() {
    return (
      
      
      <Grid container spacing={9} justify='space-between' direction='column'  >
        <Grid item>
        <NavBar />
        </Grid>
        
        <Grid item  >
          {this.props.loading === true 
          
          ? null :
          <Questions />
          }

          {/* <Login/> */}

          
        
        </Grid>
        
      // </Grid >
      
      
    )
  }
}

function mapStateToProps ({authedUser}) {
 return { loading: authedUser === null
 }
}

export default connect(mapStateToProps)(App) ;
