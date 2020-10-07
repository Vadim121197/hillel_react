import React from 'react'
//import components
import Header from '../Header/Header'
import AppSwitch from '../App/AppSwitch/AppSwitch'
//import library
import {Grid} from 'semantic-ui-react'
import {BrowserRouter as Router} from 'react-router-dom'



const App = () => {

  
  const getConfirm = (content, callback) => {
    const allowTransition = window.confirm(content);
    callback(allowTransition);
  }
  return (
    <Router getUserConfirmation={getConfirm}>
      <Grid>
        <Grid.Row>
          <Header/>
        </Grid.Row>
      </Grid>
      <Grid.Row>
        <AppSwitch/>
      </Grid.Row>
    </Router>
  )
}

export default App
