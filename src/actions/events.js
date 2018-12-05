import uuid from 'uuid'

//*******************************************************
// EVENTS ACTION GENERATORS
//*******************************************************

const addEvent = (
   {
      description = '', 
      note = '', 
      cleaner = 'unknown', 
      createdAt = 0, 
      cleanedAt = 0,
      place = '',
      comments = [],
      id
   } = {}) => ({
      type:'ADD_EVENT',
      event: {
         id: id,
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
      createdAt: 125,
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