import React, {Fragment} from 'react'
import {Comment, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'
import CommentCard from './CommentCard/CommentCard'
import PropTypes from 'prop-types'

const CommentsList = ({postId}) => {

  const {
    loading,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {}, [])

  return (
    <Fragment>
      {loading
        ? <Loader active inline='centered'/>
        : <Comment.Group size='small'>
          {data.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        </Comment.Group>}
    </Fragment>
  )
}

CommentsList.propTypes = {
  postId: PropTypes.number.isRequired
}

export default CommentsList
