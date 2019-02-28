import { removeEvent, editEvent, addEvent, startAddEvent } from '../../actions/events'
import events from '../fixtures/events'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

//*******************************************************
// Event tests
//*******************************************************

   test('should set up and REMOVE_EVENT action object', () => {
      const action = removeEvent('123abc')
      expect(action).toEqual({
         type: 'REMOVE_EVENT',
         id: '123abc'
      })
   })

   test('should set up and EDIT_EVENT action object', () => {
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

   test('should set up and ADD_EVENT action object', () => {
      const action = addEvent(events[0])
      expect(action).toEqual({
         type:'ADD_EVENT',
         event: events[0]
      })
   })

   test('should add the event to database and the redux store', (done) => { // async test

      const store = createMockStore({})
      const eventData = {
         ...events[2]
      }

      store.dispatch(startAddEvent(eventData))
      .then(() => {
         const actions = store.getActions()
         expect(actions[0]).toEqual({
            type: 'ADD_EVENT',
            event: {
               ...events[2],
               id: expect.any(String)
            }
         })
         return database.ref(`events/${actions[0].event.id}`).once('value')
      })
      .then(snapshot => {
         expect(snapshot.val()).toEqual(events[2])
         done()
      })
   })

   test('should add the event to database and the redux store with default values', (done) => { // async test

      const store = createMockStore({})
      const eventData = {}

      store.dispatch(startAddEvent(eventData))
      .then(() => {
         const actions = store.getActions()
         expect(actions[0]).toEqual({
            type: 'ADD_EVENT',
            event: {
               note: '', 
               cleaner: 'unknown', 
               cleanedAt: 0,
               createdAt: 0,
               place: '',
               id: expect.any(String)
            }
         })
         return database.ref(`events/${actions[0].event.id}`).once('value')
      })
      .then(snapshot => {
         expect(snapshot.val()).toEqual({
            note: '', 
            cleaner: 'unknown', 
            cleanedAt: 0,
            createdAt: 0,
            place: ''
         })
         done()
      })
   })

