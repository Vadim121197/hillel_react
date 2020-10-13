import React, {Fragment} from 'react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {List, Header} from 'semantic-ui-react'
import useFetch from 'use-http'
import CommentsList from './CommentsList/CommentsList'
import PropTypes from 'prop-types'

const PostCard = ({post}) => {
  const {title, body, userId, id} = post
  const [isClicked,
    setIsClicked] = useState(false)

  const {
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {}, [userId])

  return (
    <Fragment>
      <List.Item>
        <List.Content>
          <List.Header>
            <NavLink to={`/users/${data.id}`}>{data.name}</NavLink>
          </List.Header>
          <List.Header>{title}</List.Header>
          <List.Description>
            {body}
          </List.Description>
        </List.Content>
        <Header as='h4' dividing onClick={() => setIsClicked(!isClicked)}>
          Comments
        </Header>
        {isClicked && <CommentsList postId={id}/>}
      </List.Item>
    </Fragment>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard
