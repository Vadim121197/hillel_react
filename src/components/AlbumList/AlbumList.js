import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { List, Loader } from 'semantic-ui-react'
import useFetch from 'use-http'
import AlbumCard from '../UserPage/Albums/AlbumCard/AlbumCard'
import AlbumModal from '../UserPage/Albums/AlbumCard/AlbumModal/AlbumModal'

const AlbumList = () => {
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/albums`, {}, [])

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
        <Route exact path='/albums/album/:albumId'>
        <AlbumModal/>
      </Route>
    </Fragment>
  )
}

export default AlbumList
