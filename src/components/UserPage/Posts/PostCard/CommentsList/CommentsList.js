import React, {Fragment} from 'react'
import {Comment, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'
import CommentCard from './CommentCard/CommentCard'

const CommentsList = ({postId}) => {

  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {}, [])

  console.log(data)
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

export default CommentsList
