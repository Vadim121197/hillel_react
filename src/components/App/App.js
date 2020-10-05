import React from 'react'
//import components
import Header from '../Header/Header'
import AppSwitch from '../App/AppSwitch/AppSwitch'
//import library
import {Grid, Menu} from 'semantic-ui-react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Grid>
        <Grid.Row>
          <Header/>
        </Grid.Row>
      </Grid>
      <Grid.Row>
        <AppSwitch/>
      </Grid.Row>
    </BrowserRouter>
  )
}

export default App
