import React, {Fragment} from 'react'
//import library
import {NavLink} from 'react-router-dom'
import {List, Image} from 'semantic-ui-react'
import './UserListCard.css'

const UserListCard = ({user}) => {
  const {id, name} = user
  return (
    <Fragment>
      <List.Item>
        <Image
          avatar
          src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
        <List.Content>
          <List.Header>
            <NavLink to={`/users/${id}`} activeClassName='activeLink'>{name}</NavLink>
          </List.Header>
        </List.Content >
      </List.Item>
    </Fragment>
  )
}
export default UserListCard