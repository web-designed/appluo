import uuid from 'uuid'
import moment from 'moment'
import database from '../firebase/firebase'


//*******************************************************
// EVENTS ACTION GENERATORS
//*******************************************************

// export const addEvent = (
//    {
//       note = '', 
//       cleaner = 'unknown', 
//       cleanedAt = moment().valueOf(),
//       createdAt = moment().valueOf(),
//       place = '',
//       comments = [],
//       id = uuid()
//    } = {}) => ({
//       type:'ADD_EVENT',
//       event: {
//          id,
//          note,
//          cleaner,
//          place,
//          createdAt,
//          cleanedAt,
//          comments
//       }
//    }
// )

export const addEvent = (event) => ({
   type:'ADD_EVENT',
   event
})

export const startAddEvent = (eventData = {}) => {
   return (dispatch) => {
      const {
         note = '', 
         cleaner = 'unknown', 
         cleanedAt = moment().valueOf(),
         createdAt = moment().valueOf(),
         place = '',
         comments = []
      } = eventData

      const event = { note, cleaner, cleanedAt, createdAt, place, comments }

      database.ref('events').push(event).then((ref) => {
         dispatch(addEvent({
            id: ref.key,
            ...event
         }))
      })
   }
}


export const removeEvent = (id) => ({
   type: 'REMOVE_EVENT',
   id
})

export const editEvent = (id, update) => ({
   type: 'EDIT_EVENT', 
   id,
   update
})

export const addComment = (eventId, { commentBody, commenter }) => ({
   type: 'ADD_COMMENT',
   eventId,
   comment: {
      id: uuid(),
      createdAt: moment().valueOf(),
      commenter,
      commentBody
   }
})

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