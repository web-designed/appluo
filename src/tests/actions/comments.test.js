import { removeComment, editComment, addComment, startAddComment } from '../../actions/comments'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase';
import events from '../fixtures/events'

//*******************************************************
// Comment tests
//*******************************************************

   const createMockStore = configureMockStore([thunk])

   test('should set up and REMOVE_COMMENT action object', () => {
      const action = removeComment('123abc', '123abc')
      expect(action).toEqual({
         type: 'REMOVE_COMMENT',
         eventId: '123abc',
         commentId: '123abc'
      })
   })

   test('should set up and EDIT_COMMENT action object', () => {
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

   test('should set up and ADD_COMMENT action object', () => {
      const comment = {
         commentBody: 'test',
         commenter: 'kylu'
      }
      const eventId = '123abc'

      const action = addComment(eventId, comment)
      expect(action).toEqual({
         type: 'ADD_COMMENT',
         eventId: eventId,
         comment
      })
   })

   
