import React, {Fragment} from 'react'
//import library
import {List} from 'semantic-ui-react'

const PostCard = ({post}) => {
  const {title, body} = post

  return (
    <Fragment>
      <List.Item>
        <List.Content>
          <List.Header>{title}</List.Header>
          <List.Description>
            {body}
          </List.Description>
        </List.Content>
      </List.Item>

    </Fragment>
  )
}

export default PostCard
