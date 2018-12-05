import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addComment } from '../actions/events'

const CommentAddForm = ({ dispatch, currentEventId }) => {

   const handleSubmitComment = (e) => {
      e.preventDefault()
      const newComment = {
         commentBody: e.target.commentBody.value,
         commenter: 'kylu',
         createdAt: 123,
         id: uuid()
      }
      dispatch(addComment(currentEventId, newComment))
   }

   return (
      <div>
         <h3>Add comment</h3>
         <form onSubmit={handleSubmitComment}>
            <textarea name="commentBody"></textarea>
            <button>Submit</button>
         </form>
      </div>
   )
}

export default connect()(CommentAddForm)