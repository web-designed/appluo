import React from 'react'
import moment from 'moment'

const CommentListItem = ({ comment }) => {

   if(comment){
      const now = moment()
      const fromNow = moment(comment.createdAt).from(now)

      return (
         <div class="list-group-item">
            <p>{comment.commentBody}</p>
            <div class="text-right">
               <small class="text-secondary">{comment.commenter} {fromNow}</small>
            </div>
         </div>
      )
   }
}

export default CommentListItem