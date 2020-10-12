import React, {Fragment, useState} from 'react'
//import library
import {Modal, Button} from 'semantic-ui-react'
import {useHistory, useParams, useRouteMatch} from 'react-router-dom'
import useFetch from 'use-http'
import GlideJS from '../../../../Glide/GlideJS'

const AlbumModal = () => {
  const [open, setOpen] = useState(true)
  const {id, albumId} = useParams()
  const history = useHistory()
  const {path} = useRouteMatch()

  const {
    loading,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`, {}, [albumId])

  const handleClose = () => {
    setOpen(false)
    if(path === `/albums/album/:albumId`) {
      history.push(`/albums`)
    }else if(path === `/users/:id/album/:albumId`){
      history.push(`/users/${id}`)
    }
    
  }

  console.log(path)
  return (
    <Fragment>
      {loading || <Modal onClose={handleClose} open={open} size="large">
        <Modal.Content image>
          <GlideJS images={data}/>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClose} positive>
            Ok
          </Button >
        </Modal.Actions>
      </Modal>}
    </Fragment>
  )
}

export default AlbumModal