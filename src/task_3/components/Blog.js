import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Posts from "./Posts";
import AuthorInfo from "./AuthorInfo";

class Blog extends Component {
//   state = {
//     selectedAuthorInfo: null
//   };

//   handlePostSelection = post => {
//     this.setState({ selectedAuthorInfo: post.userId })
//   };

  render() {
    
    return (
      <Grid className='blog'>
          {/* <Grid.Column width={4}>
            <Posts onPostSelect={this.handlePostSelection} />
          </Grid.Column>
          <Grid.Column width={4} className='author-column'>
            <AuthorInfo authorId={selectedAuthorInfo} />
          </Grid.Column> */}
      </Grid>
    );
  }
}

export default Blog;