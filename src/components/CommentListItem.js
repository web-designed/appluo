import React from 'react'
import moment from 'moment'

const CommentListItem = ({ comment }) => {

   if(comment){
      const now = moment()
      const fromNow = moment(comment.createdAt).from(now)

      return (
         <div>
            <h3>{comment.commentBody}</h3>
            <p>{comment.commenter} - {fromNow} </p>
         </div>
      )
   }
}

export default CommentListItem