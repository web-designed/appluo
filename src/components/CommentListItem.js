import React from 'react'

const CommentListItem = ({ commentsId, createdAt, commenter, commentBody }) => {

   return (
      <div>
         <h3>{commentBody}</h3>
         <p>{commenter} - {createdAt} </p>
      </div>
   )
}

export default CommentListItem