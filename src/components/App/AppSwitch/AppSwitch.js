import React from 'react'
//import components
import UsersList from '../../UsersList/UsersList'
import UserPage from '../../UserPage/UserPage'
//import library
import {Switch, Route} from 'react-router-dom'

const AppSwitch = () => {
  const a = 10
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/about">
        About
      </Route>
      <Route exact path="/users">
        <UsersList/>
      </Route>
      <Route exact path="/users/:id" render={props => <UserPage {...props} a={a}/>}/>
    </Switch>
  )
}

export default AppSwitch
