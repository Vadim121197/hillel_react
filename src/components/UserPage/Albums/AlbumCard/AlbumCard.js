import React, {Fragment} from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {List} from 'semantic-ui-react'

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

AlbumCard.propTypes = {
  album: PropTypes.object.isRequired
}

export default AlbumCard