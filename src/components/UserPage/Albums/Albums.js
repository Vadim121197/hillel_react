import React, {Fragment} from 'react'
//import componentns
import AlbumCard from './AlbumCard/AlbumCard'
//import library
import {List, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'

const Albums = ({userId}) => {
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`, {}, [])

  if (error) {
    console.log(error)
  }
  
  return (
    <Fragment>
      {loading
        ? <Loader active inline='centered'/>
        : (
          <List divided relaxed>
            <h2>Albums</h2>
            {data.map(album => <AlbumCard key={album.id} album={album}/>)}
          </List>
        )}
    </Fragment>
  )
}

export default Albums