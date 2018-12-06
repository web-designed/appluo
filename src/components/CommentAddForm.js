import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addComment } from '../actions/events'
import moment from 'moment'

class CommentAddForm extends React.Component {

   state = {
      error: '',
      commentBody: '',
      commenter: 'kylu'
   }

   onCommentBodyChange = (e) => {
      const commentBody = e.target.value
      this.setState(() => ({ commentBody }))
   }

   handleSubmitComment = (e) => {
      e.preventDefault()
      if(!this.state.commentBody){
         this.setState(() => ({
            error: 'Please add the comment!'
         }))
      } else {
         const newComment = {
            commentBody: this.state.commentBody,
            commenter: this.state.commenter
         }
         this.props.dispatch(addComment(this.props.currentEventId, newComment))
         this.setState(() => ({
            commentBody: ''
         }))
      }
   }

   render(){
      return (
         <div>
            <h3>Add comment</h3>
            <form onSubmit={this.handleSubmitComment}>
               <textarea 
                  name="commentBody"
                  value={this.state.commentBody}
                  onChange={this.onCommentBodyChange}
                  placeholder="Add your comment"
               ></textarea><br/>
               {this.state.error && <span>{this.state.error}</span>}
               <button>Add Comment</button>
            </form>
         </div>
      )
   }
}

export default connect()(CommentAddForm)