import React from 'react'
//import library
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <Menu secondary>
      <Menu.Item as={NavLink} to="/" name='home'/>
      <Menu.Item as={NavLink} to="/about" name='about'/>
      <Menu.Item as={NavLink} to="/users" name='users'/>
    </Menu>
  )
}

export default Header
