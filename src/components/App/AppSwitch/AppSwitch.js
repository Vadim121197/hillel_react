import React from 'react'
//import components
import UsersList from '../../UsersList/UsersList'
import UserPage from '../../UserPage/UserPage'
//import library
import {Switch, Route} from 'react-router-dom'
import AlbumModal from '../../UserPage/Albums/AlbumCard/AlbumModal/AlbumModal'

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/about">
        About
      </Route>
      <Route path="/users">
        <UsersList/>
      </Route>
      {/* <Route path="/users/:id" render={props => <UserPage {...props} />}/> */}
      <Route exact path='/users/:id/album/:albumId'><AlbumModal/></Route>
    </Switch>
  )
}

export default AppSwitch
