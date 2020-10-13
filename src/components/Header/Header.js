import React from 'react'
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <Menu secondary>
      <Menu.Item exact as={NavLink} to="/" name='posts'/>
      <Menu.Item exact as={NavLink} to="/albums" name='albums'/>
      <Menu.Item as={NavLink} to="/users" name='users'/>
    </Menu>
  )
}

export default Header
