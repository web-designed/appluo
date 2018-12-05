//*******************************************************
// EVENTS REDUCERS
//*******************************************************

   const eventsReducerDefaultState = []
   const eventsReducer = (state = eventsReducerDefaultState, action) => {
      switch(action.type){
         case 'ADD_EVENT':
            return state.concat(action.event)
         case 'REMOVE_EVENT':
            return state.filter(({ id }) => id !== action.id)
         case 'EDIT_EVENT':
            return state.map((event) => {
               if(event.id === action.id) {
                  return {
                     ...event,
                     ...action.update
                  }
               } else {
                  return event
               }
            })
         case 'ADD_COMMENT':
            return state.map((event) => {
               if(event.id === action.eventId){
                  return {
                     ...event,
                     comments: [...event.comments, action.comment]
                  }
               } else {
                  return event
               }
            })
         case 'REMOVE_COMMENT':
            return state.map((event) => {
               if(event.id === action.eventId){
                  return {
                     ...event,
                     comments: event.comments.filter((comment) => {
                        return comment.id !== action.commentId
                     })
                  }
               } else {
                  return event
               }
            })
         case 'EDIT_COMMENT':
            return state.map((event) => {
               if(event.id === action.eventId){
                  return {
                     ...event,
                     comments: event.comments.map((comment) => {
                        if(comment.id === action.commentId){
                           return {
                              ...comment,
                              ...action.update
                           }
                        } else {
                           return comment
                        }
                     }) 
                  }
               } else {
                  return event
               }
            })
         default:
            return state
      }
   }

export default eventsReducer