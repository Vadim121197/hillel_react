import React from 'react'
import UserCard from './UserCard/UserCard'
import Albums from './Albums/Albums'
import {useParams} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
import PostList from '../PostList/PostList'

const UserPage = () => {
  const {id} = useParams()

  return (
    <Grid>
      <Grid.Column width={5}>
        <UserCard id={id}/>
      </Grid.Column>
      <Grid.Column width={7}>
        <Albums userId={id}/>
        <br/>
        <br/>
        <PostList url={`https://jsonplaceholder.typicode.com/users/${id}/posts`}/>
      </Grid.Column>
    </Grid>
  )
}

export default UserPage