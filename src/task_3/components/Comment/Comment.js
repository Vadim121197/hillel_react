import React from 'react'

const Comment = () => {
    return (
        <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                    <a>Reply</a>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default Comment