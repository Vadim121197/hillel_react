import React, {Fragment} from 'react'
import {List, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'
import AlbumCard from '../UserPage/Albums/AlbumCard/AlbumCard'

const AlbumList = () => {
  const {
    loading,
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
    </Fragment>
  )
}

export default AlbumList
