import React from 'react'
import { connect } from 'react-redux'
import CommentsListItem from './CommentListItem'

const CommentsList = ({ currentEvent }) => {
   return (
      <div>
         {currentEvent.comments.map((comment) => (
            <CommentsListItem comment={comment} key={comment.id} />
         ))}
      </div>
   )
}
export default CommentsList