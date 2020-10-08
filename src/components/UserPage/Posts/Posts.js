import React, {Fragment} from 'react'
//import components
import PostCard from './PostCard/PostCard'
//import library
import {List} from 'semantic-ui-react'
import useFetch from 'use-http'

const Posts = ({userId}) => {
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {}, [userId])

  if (error) {
    console.log(error)
  }

  return (
    <Fragment>
      {loading || (
        <List>
          <h2>Posts</h2>
          {data.map(post => <PostCard key={post.id} post={post}/>)}
        </List>
      )}
    </Fragment>
  )
}

export default Posts
