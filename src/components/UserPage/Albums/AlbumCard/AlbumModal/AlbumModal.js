import React, {useState} from 'react'
//import library
import {Image, Modal, Button} from 'semantic-ui-react'
import {NavLink, useHistory, useRouteMatch, useParams} from 'react-router-dom'

const AlbumModal = () => {
  const [open, setOpen] = useState(true)
  const {id, albumsId} = useParams()
  const history = useHistory()
  
//   const {id, title} = album
//   const triggerElement = (
//     <NavLink to={`${match.url}/album/${id}`} onClick={() => history.push(`${match.url}/album/${id}`)}>{title}</NavLink>
//   )
  
  const handleClose = () => {
    setOpen(false)
    history.push(`/users/${id}`)
  }
  console.log(albumsId)
  return (
    <Modal
      onClose={handleClose}
      open={open}
      size="fullscreen"
      >
      <Modal.Content image>
        <Image
          size='small'
          src='https://react.semantic-ui.com/images/wireframe/image-square.png'
          wrapped/>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} positive>
          Ok
        </Button >
      </Modal.Actions>
    </Modal>
  )
}

export default AlbumModal