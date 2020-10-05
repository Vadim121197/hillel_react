import React, {useState, useEffect} from 'react'
//import components
import UserListCard from '../UserListCard/UserListCard'
//import library
import useFetch from 'use-http'
import {Image, List, Loader} from 'semantic-ui-react'

const UsersList = () => {
  //use new hook useFetch
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users`, {}, [])

  if (error) {
    console.log(error)
  }

  return ( <> {
    loading
      ? <Loader active inline='centered'/>
      : <List celled>
          {data.map(user => <UserListCard key={user.id} user={user}/>)}
        </List>
  } < />
     
  )
}

export default UsersList