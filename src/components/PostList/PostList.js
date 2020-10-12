import React, {Fragment} from 'react'
import {List, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'
import PostCard from '../UserPage/Posts/PostCard/PostCard'

const PostList = () => {
  
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, {}, [])

  return (
    <Fragment>
      {loading
        ? <Loader active inline='centered'/>
        : (
          <List>
            <h2>All posts</h2>
            {data.map(post => <PostCard key={post.id} post={post}/>)}
          </List>
        )}
    </Fragment>
  )
}

export default PostList
