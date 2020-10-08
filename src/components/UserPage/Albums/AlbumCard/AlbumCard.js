import React, {Fragment, useState} from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
//import library
import {List} from 'semantic-ui-react'
import AlbumModal from './AlbumModal/AlbumModal'

const AlbumCard = ({album}) => {
  const match = useRouteMatch()
  const {id, title} = album
  return (
    <Fragment>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle'/>
        <List.Content>
          <List.Header>
            <NavLink to={`${match.url}/album/${id}`}>{title}</NavLink>  
          </List.Header>
        </List.Content>
        
      </List.Item>
    </Fragment>
  )
}

export default AlbumCard