import React from 'react'
import { connect } from 'react-redux'
import CommentsListItem from './CommentListItem'
import CommentAddForm from './CommentAddForm'

const CommentsList = ({ events, currentEvent }) => {
   return (
      <div>
         <h1>Comments:</h1>
         {currentEvent.comments.map((comment) => (
            <CommentsListItem comment={comment} />
         ))}
         <CommentAddForm currentEventId={currentEvent.id} />
      </div>
   )
}
const mapStateToProps = ({ events }) => ({
   events: events
})
export default connect(mapStateToProps)(CommentsList)