import React, { Component,Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './layout/NavBar'
import Login from './components/Login'
import Result from './components/Result'
import Question from './components/Question'
import Dashboard from './components/Dashboard'
// import Result from './components/Result'
import {connect} from 'react-redux'
import {handleInitialData} from './actions/shared'


 class App extends Component {
   componentDidMount(){
     this.props.dispatch(handleInitialData())
   }
  render() {
    const authedUser = this.props.authedUser
    return (
      
      <Router>
      <Grid container spacing={9} justify='space-between' direction='column'  >
        {authedUser === null ? (
           <Switch>
           <Route path='/' exact component={Login}/>
           </Switch>
            
        ) : (
          <Fragment>
          <Grid item>
        <NavBar />
        </Grid>
          <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    {/* <Route path='/add' component={NewQuestion}/>  */}
                    {/* <Route path='/leaderboard' component={Leaderboard}/>
                    <Route path='/logout' component={Logout}/> */}
                   <Route path='/question/:questionId' component={Question}/>
                    {/* <Route path='*' component={NotFound}/>  */}
                  </Switch>
                  </Fragment>
        )}
       
        
        

          

          
        
        </Grid>
        

      </Router>
      
      
    )
  }
}

function mapStateToProps ({authedUser}) {
 return { authedUser
 }
}

export default connect(mapStateToProps)(App) ;
