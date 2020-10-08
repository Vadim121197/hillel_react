import React from 'react'
//import components
import Header from '../Header/Header'
import AppSwitch from '../App/AppSwitch/AppSwitch'
//import library
import {Grid} from 'semantic-ui-react'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <AppSwitch/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Router>
  )
}

export default App
