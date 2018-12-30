import { removeEvent, editEvent, removeComment, editComment, addComment, addEvent } from '../../actions/events'

test('should set up an remove event action object', () => {
   const action = removeEvent('123abc')
   expect(action).toEqual({
      type: 'REMOVE_EVENT',
      id: '123abc'
   })
})

test('should set up an edit event action object', () => {
   const update = {
      note: 'test'
   }
   const action = editEvent('123abc', update)
   expect(action).toEqual({
      type: 'EDIT_EVENT',
      id: '123abc',
      update
   })
})

test('should set up an remove comment action object', () => {
   const action = removeComment('123abc', '123abc')
   expect(action).toEqual({
      type: 'REMOVE_COMMENT',
      eventId: '123abc',
      commentId: '123abc'
   })
})

test('should set up an edit comment action object', () => {
   const update = {
      commentBody: 'test'
   }
   const action = editComment('123abc', '123abc', update)
   expect(action).toEqual({
      type: 'EDIT_COMMENT',
      eventId: '123abc',
      commentId: '123abc',
      update    
   })
})

test('should set up an add comment action object', () => {
   const comment = {
      commentBody: 'test',
      commenter: 'kylu'
   }

   const action = addComment('123abc', comment)
   expect(action).toEqual({
      type: 'ADD_COMMENT',
      eventId: '123abc',
      comment: {
         id: expect.any(String),
         createdAt: expect.any(Number),
         ...comment
      }
   })
})

test('should set up an add event action object', () => {
   const event = {
      note: 'test',
      place: 'küche',
      cleaner: 'kylu'
   }
   const action = addEvent(event)
   expect(action).toEqual({
      type:'ADD_EVENT',
      event: {
         id: expect.any(String),
         ...event,
         createdAt: expect.any(Number),
         cleanedAt: expect.any(Number),
         comments: []
      }
   })
})