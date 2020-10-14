import React from 'react'
import UsersList from '../../UsersList/UsersList'
import { Switch, Route, withRouter } from 'react-router-dom'
import AlbumModal from '../../UserPage/Albums/AlbumCard/AlbumModal/AlbumModal'
import PostList from '../../PostList/PostList'
import AlbumList from '../../AlbumList/AlbumList'
import NotFound from '../../NotFound/NotFound'

const AppSwitch = ({ location }) => {
  return (
    <Switch>
      <Route exact path="/">
        <PostList url={`https://jsonplaceholder.typicode.com/posts`} />
      </Route>
      <Route path="/albums">
        <Route exact path='/albums/album/:albumId'>
          <AlbumModal />
        </Route>
        <AlbumList />
      </Route>
      <Route path="/users">
        <UsersList />
      </Route>
      <Route exact path='/users/:id/album/:albumId'>
        <AlbumModal />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default withRouter(AppSwitch)
