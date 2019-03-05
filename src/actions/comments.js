
import moment from 'moment'
import database from '../firebase/firebase'

//*******************************************************
// COMMENTS ACTION GENERATORS
//*******************************************************

   export const addComment = (eventId, comment) => ({
      type: 'ADD_COMMENT',
      eventId,
      comment
   })

   export const startAddComment = (eventId, {commentBody, commenter}) => {
      return(dispatch) => {
         const comment = {
            createdAt: moment().valueOf(),
            commenter,
            commentBody
         }

         return database.ref(`events/${eventId}/comments`).push(comment).then( ref => {
            dispatch(addComment(eventId, {
               ...comment,
               id: ref.key
            }))
         })
      }
   }

   export const removeComment = (eventId, commentId) => ({
      type:'REMOVE_COMMENT',
      eventId,
      commentId
   })

   export const editComment = (eventId, commentId, update) => ({
      type:'EDIT_COMMENT',
      eventId,
      commentId,
      update
   })