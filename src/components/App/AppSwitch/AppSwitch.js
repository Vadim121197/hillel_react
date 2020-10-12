import React from 'react'
//import components
import UsersList from '../../UsersList/UsersList'
//import library
import {Switch, Route} from 'react-router-dom'
import AlbumModal from '../../UserPage/Albums/AlbumCard/AlbumModal/AlbumModal'
import PostList from '../../PostList/PostList'
import AlbumList from '../../AlbumList/AlbumList'

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PostList/>
      </Route>
      <Route path="/albums">
        <AlbumList/>
      </Route>
      <Route path="/users">
        <UsersList/>
      </Route>
      <Route exact path='/users/:id/album/:albumId'>
        <AlbumModal/>
      </Route>
    </Switch>
  )
}

export default AppSwitch
