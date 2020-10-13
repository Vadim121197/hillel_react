import React, {Fragment} from 'react'
import UserListCard from './UserListCard/UserListCard'
import useFetch from 'use-http'
import {Grid, List, Loader} from 'semantic-ui-react'
import {Route} from 'react-router-dom'
import UserPage from '../UserPage/UserPage'
import AlbumModal from '../UserPage/Albums/AlbumCard/AlbumModal/AlbumModal'

const UsersList = () => {

  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users`, {}, [])

  if (error) {
    console.log(error)
  }

  return (
    <Fragment>
      {loading
        ? <Loader active inline='centered'/>
        : (
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column width={3}>
                <List>
                  {data.map(user => <UserListCard key={user.id} user={user}/>)}
                </List>
              </Grid.Column>
              <Grid.Column width={9}>
                <Route path="/users/:id">
                  <UserPage/>
                </Route>
                <Route path='/users/:id/album/:albumId'><AlbumModal/></Route>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
    </Fragment>
  )
}

export default UsersList