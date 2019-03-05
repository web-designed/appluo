import React from 'react'
import { connect } from 'react-redux'
import CommentsListItem from './CommentListItem'

const CommentsList = ({ currentEvent }) => {
   return (
      <div>
         { currentEvent.comments && (
            <div class="pt-4">
               <h6>Comments</h6>
               <div class="list-group">
                  {currentEvent.comments.map((comment) => (
                     <CommentsListItem comment={comment} key={comment.id} />
                  ))}
               </div>
            </div>
         )}
      </div>
   )
}
export default CommentsList