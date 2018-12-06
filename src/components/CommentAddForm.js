import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addComment } from '../actions/events'
import moment from 'moment'

const CommentAddForm = ({ dispatch, currentEventId }) => {

   const handleSubmitComment = (e) => {
      e.preventDefault()
      const newComment = {
         commentBody: e.target.commentBody.value,
         commenter: 'kylu',
         id: uuid()
      }
      dispatch(addComment(currentEventId, newComment))
   }

   return (
      <div>
         <h3>Add comment</h3>
         <form onSubmit={handleSubmitComment}>
            <textarea name="commentBody"></textarea><br/>
            <button>Add Comment</button>
         </form>
      </div>
   )
}

export default connect()(CommentAddForm)