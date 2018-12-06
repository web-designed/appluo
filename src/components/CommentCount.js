import React from 'react'

const CommentCount = ({ commentsCount }) => {
   return (
      <span>comments: <span>{ commentsCount }</span></span>
   )
}

export default CommentCount