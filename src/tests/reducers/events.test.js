import eventsReducer from '../../reducers/events'
import events from '../fixtures/events'
import moment from 'moment'

test('should set the default state', () => {
   const state = eventsReducer(undefined, '@@INIT')
   expect(state).toEqual([])
})

test('should set the events', () => {
   const action = {
      type: 'SET_EVENTS',
      events
   }
   const state = eventsReducer(undefined, action)
   expect(state).toEqual(events)
})

test('should add an event', () => {
   const action = {
      type: 'ADD_EVENT',
      event: events[0]
   }
   const state = eventsReducer(undefined, action)
   expect(state).toEqual([ events[0] ])
})

test('should not remove an event if id not found', () => {
   const action = {
      type: 'REMOVE_EVENT',
      id: '-1'
   }
   const state = eventsReducer(events, action)
   expect(state).toEqual(events)
})

test('should remove an event', () => {
   const action = {
      type: 'REMOVE_EVENT',
      id: events[0].id
   }
   const state = eventsReducer(events, action)
   expect(state).toEqual([
      events[1],
      events[2]
   ])
})

test('should edit an event', () => {
   const action = {
      type: 'EDIT_EVENT',
      id: events[0].id,
      update: {
         cleaner: 'Till',
         place: 'Küche'
      }
   }
   const state = eventsReducer([events[0]], action)
   expect(state).toEqual([
      {
         ...events[0],
         ...action.update
      }
   ])
})

test('should add a comment', () => {
   const newComment = {
      id: '3',
      createdAt: moment(0).valueOf(),
      commentBody: 'this is my new comment',
      commenter: 'Kylu'
   }
   const action = {
      type: 'ADD_COMMENT',
      eventId: events[0].id,
      comment: newComment
   }
   const state = eventsReducer([events[0]], action)
   expect(state[0].comments).toEqual([
      ...events[0].comments,
      newComment
   ])
})

test('should not remove a comment if events id not found', () => {
   const action = {
      type: 'REMOVE_COMMENT',
      eventId: '-1',
      commentId: events[0].comments[0].id
   }
   const state = eventsReducer(events, action)
   expect(state).toEqual(events)
})

test('should not remove a comment if comments id not found', () => {
   const action = {
      type: 'REMOVE_COMMENT',
      eventId: events[0].id,
      commentId: '-1'
   }
   const state = eventsReducer([events[0]], action)
   expect(state[0].comments).toEqual(events[0].comments)
})

test('should remove a comment', () => {
   const action = {
      type: 'REMOVE_COMMENT',
      eventId: events[0].id,
      commentId: events[0].comments[0].id
   }
   const state = eventsReducer([events[0]], action)
   expect(state[0].comments).toEqual([
      events[0].comments[1]
   ])
})

test('should edit a comment', () => {
   const action = {
      type: 'EDIT_COMMENT',
      eventId: events[0].id,
      commentId: events[0].comments[0].id,
      update: {
         commentBody: 'STAUBSAUGEN!'
      }
   }
   const state = eventsReducer([ events[0] ], action)
   expect(state[0].comments).toEqual([
      {
         ...events[0].comments[0],
         ...action.update
      },
      events[0].comments[1]
   ])
})