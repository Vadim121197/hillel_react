import React from 'react'
//import components
import UsersList from '../../UsersList/UsersList'
import UserPage from '../../UserPage/UserPage'
//import library
import {Switch, Route} from 'react-router-dom'

const AppSwitch = () => {
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
      <Route exact path="/users/:id" render={props => <UserPage {...props} />}/>
      <Route exact path='/users/:id/album/:albumId'>Album</Route>
    </Switch>
  )
}

export default AppSwitch
