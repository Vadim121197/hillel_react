import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentCard = ({comment}) => {
    const {email, body} = comment
    return (
        <Comment>
        <Comment.Content>
          <Comment.Author >{email}</Comment.Author>
          <Comment.Text>{body}</Comment.Text>
        </Comment.Content>
      </Comment>
    )
}

export default CommentCard
