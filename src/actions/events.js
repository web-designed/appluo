
import database from '../firebase/firebase'


//*******************************************************
// EVENTS ACTION GENERATORS
//*******************************************************

   export const addEvent = (event) => ({
      type:'ADD_EVENT',
      event
   })

   export const startAddEvent = (eventData = {}) => {
      return (dispatch) => {
         const {
            note = '', 
            cleaner = 'unknown', 
            cleanedAt = 0,
            createdAt = 0,
            place = ''
         } = eventData

         const event = { note, cleaner, cleanedAt, createdAt, place }

         return database.ref('events').push(event).then((ref) => { // add return to chain promises in the tests
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