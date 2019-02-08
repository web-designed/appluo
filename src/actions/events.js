import uuid from 'uuid'
import moment from 'moment'

//*******************************************************
// EVENTS ACTION GENERATORS
//*******************************************************

const addEvent = (
   {
      note = '', 
      cleaner = 'unknown', 
      cleanedAt = moment().valueOf(),
      createdAt = moment().valueOf(),
      place = '',
      comments = [],
      id = uuid()
   } = {}) => ({
      type:'ADD_EVENT',
      event: {
         id,
         note,
         cleaner,
         place,
         createdAt,
         cleanedAt,
         comments
      }
   }
)

const removeEvent = (id) => ({
   type: 'REMOVE_EVENT',
   id
})

const editEvent = (id, update) => ({
   type: 'EDIT_EVENT', 
   id,
   update
})

const addComment = (eventId, { commentBody, commenter }) => ({
   type: 'ADD_COMMENT',
   eventId,
   comment: {
      id: uuid(),
      createdAt: moment().valueOf(),
      commenter,
      commentBody
   }
})

const removeComment = (eventId, commentId) => ({
   type:'REMOVE_COMMENT',
   eventId,
   commentId
})

const editComment = (eventId, commentId, update) => ({
   type:'EDIT_COMMENT',
   eventId,
   commentId,
   update
})

export { addEvent, removeEvent, editEvent, addComment, removeComment, editComment }