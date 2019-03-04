import { setEvents, startRemoveEvent, removeEvent, editEvent, addEvent, startAddEvent, startEditEvent } from '../../actions/events'
import { startAddComment } from '../../actions/comments'
import events from '../fixtures/events'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

//*******************************************************
// Event tests
//*******************************************************

   // start with a fresh collection of events in the test DB
   beforeEach((done) => {
      const eventsData = {}
      events.forEach( ({ id, cleaner, place, note, createdAt, cleanedAt }) => {
         eventsData[id] = {
            cleaner, 
            place, 
            note, 
            createdAt,
            cleanedAt
         }
      })
      database.ref('events').set(eventsData).then(() => { done() })
   })

   test('should set up and REMOVE_EVENT action object', () => {
      const action = removeEvent('123abc')
      expect(action).toEqual({
         type: 'REMOVE_EVENT',
         id: '123abc'
      })
   })

   test('should remove an event from database and store', (done) => {
      const store = createMockStore({})
      store.dispatch(startRemoveEvent(events[0].id)).then(() => {
         const actions = store.getActions()
         expect(actions[0]).toEqual({
            type: 'REMOVE_EVENT',
            id: events[0].id
         })
         return database.ref(`/events/${events[0].id}`).once('value')
         .then( snapshot => {
            console.log(snapshot.val())
            expect(snapshot.val()).toBeFalse()
            done()
         })
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

   test('should edit an event in the database and store', () => {
      const store = createMockStore({})
      const update= {
         note: 'test note'
      }
      store.dispatch(startEditEvent(events[0].id, update)).then(() => {
         const actions = store.getActions()
         expect(actions[0]).toEqual({
            type: 'EDIT_EVENT',
            id: events[0].id,
            update
         })
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
      delete eventData.id

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
         expect(snapshot.val()).toEqual({
            ...eventData
         })
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

   test('should set up an SET_EVENTS action object', () => {
      const action = setEvents(events)
      expect(action).toEqual({
         type: 'SET_EVENTS',
         events
      })
   })

   test('should add comment to the DB and store', (done) => {
      const store = createMockStore({})
      const comment = {
         ...events[0].comments[0]
      }
      delete comment.id

      store.dispatch(startAddComment(events[0].id, comment))
      .then(() => {
         const actions = store.getActions()
         expect(actions[0]).toEqual({
            type: 'ADD_COMMENT',
            eventId: events[0].id,
            comment: {
               ...comment,
               createdAt: expect.any(Number),
               id: expect.any(String)
            }
         })
         return database.ref(`/events/${events[0].id}/comments/${actions[0].comment.id}`).once('value')
      }).then( snapshot => {
         expect(snapshot.val()).toEqual({
            ...comment,
            createdAt: expect.any(Number)
         })
         done()
      })
   })

