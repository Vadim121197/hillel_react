import React,{useEffect} from 'react'
//import components
import UserCard from './UserCard/UserCard'
import Albums from './Albums/Albums'
import Posts from './Posts/Posts'
//import library
import {useParams} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'

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
        <Posts userId={id}/>
      </Grid.Column>
    </Grid>
  )
}

export default UserPage