import React from 'react'
//import library
import {NavLink} from 'react-router-dom'
import {List, Image} from 'semantic-ui-react'

const UserListCard = ({user}) => {
  const {id, name, email, phone, website} = user
  return (
    <List.Item>
      <Image
        avatar
        src='https://react.semantic-ui.com/images/avatar/small/helen.jpg'/>
      <List.Content>
        <List.Header as={NavLink} to={`/users/${id}`}>{name}</List.Header>
        Email: {email}
        <br/>
        Phone: {phone}
        <br/>
        Website: {website}
      </List.Content >
    </List.Item>
  )
}
export default UserListCard