import React from 'react'
import moment from 'moment'

const CommentListItem = ({ commentsId, createdAt, commenter, commentBody }) => {

   const now = moment()
   const fromNow = moment(createdAt).from(now)

   return (
      <div>
         <h3>{commentBody}</h3>
         <p>{commenter} - {fromNow} </p>
      </div>
   )
}

export default CommentListItem