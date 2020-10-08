import React, {Fragment} from 'react'
//import componentns
import AlbumCard from './AlbumCard/AlbumCard'
//import library
import {List, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'
import { Route } from 'react-router-dom'
import AlbumModal from './AlbumCard/AlbumModal/AlbumModal'

const Albums = ({userId}) => {
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`, {}, [userId])

  if (error) {
    console.log(error)
  }

  return (
    <Fragment>
      {loading || (
        <List divided relaxed>
          <h2>Albums</h2>
          {data.map(album => <AlbumCard key={album.id} album={album}/>)}
        </List>
      )}
    </Fragment>
  )
}

export default Albums