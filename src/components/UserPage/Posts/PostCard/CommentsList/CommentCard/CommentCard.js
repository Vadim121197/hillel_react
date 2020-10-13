import React from 'react'
import {Comment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

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

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired
}

export default CommentCard
