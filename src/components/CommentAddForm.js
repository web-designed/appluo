import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { startAddComment } from '../actions/comments'
import moment from 'moment'

export class CommentAddForm extends React.Component {

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
            error: this.props.notifications.validate
         }))
      } else {
         const newComment = {
            commentBody: this.state.commentBody,
            commenter: this.state.commenter
         }
         //dispatch the action
         this.props.startAddComment(this.props.currentEventId, newComment)

         //clear the comment and the validation error
         this.setState(() => ({
            commentBody: '',
            error: ''
         }))
      }
   }

   render(){
      return (
         <div class="pt-3">
            <form onSubmit={this.handleSubmitComment}>
               <div class="form-group">
                  <textarea 
                     class="form-control bg-light"
                     name="commentBody"
                     value={this.state.commentBody}
                     onChange={this.onCommentBodyChange}
                     placeholder="Add your comment"
                  ></textarea>
                  {this.state.error && <p class="text-danger"><small>{this.state.error}</small></p>}
               </div>
               <div class="form-group">
                  <button class="btn btn-secondary">Add Comment</button>
               </div>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   startAddComment: (id, newComment) => dispatch(startAddComment(id, newComment))
})

const mapStateToProps = state => ({
   notifications: state.settings.notifications.comment
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentAddForm)