import React, {Fragment} from 'react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
//import library
import {List, Header} from 'semantic-ui-react'
import useFetch from 'use-http'
import CommentsList from './CommentsList/CommentsList'

const PostCard = ({post}) => {
  const {title, body, userId, id} = post
  const [isClicked,
    setIsClicked] = useState(false)

  const {
    loading,
    error,
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

export default PostCard
