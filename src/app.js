
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import { addEvent, addComment } from './actions/events'
import { setTextFilter, filterByName, filterByPlace } from './actions/filters'
import moment from 'moment'


   const store = configStore()

   const event1 = store.dispatch(addEvent({ id:'1', cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'test', cleaner: 'kylu', place: 'Küche'}))
   const event2 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'test2', cleaner: 'Kylu', place: 'Küche'}))
   const event3 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'test3', cleaner: 'till', place: 'Flur'}))
   const event4 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'my note', cleaner: 'chris', place: 'Bad'}))
   const event5 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'my note', cleaner: 'chris', place: 'Flur'}))
   const event6 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'my note', cleaner: 'Kylu', place: 'Bad'}))
   const event7 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'chris', place: 'Bad'}))

   // store.dispatch(setTextFilter('note'))

   // store.dispatch(removeEvent(event1.event.id))
   // store.dispatch(editEvent(event2.event.id, {cleaner:'Chris'} ))
   // store.dispatch(setTextFilter('bad'))
   // store.dispatch(sortAsc())
   // store.dispatch(sortDesc())
   // store.dispatch(filterByPlace('küche'))
   // store.dispatch(filterByName('chris'))
   // store.dispatch(setStartDate(20))
   // store.dispatch(setEndDate(10000))
   store.dispatch(addComment(event1.event.id, { commentBody: 'this is my comment', commenter: 'Kylu' }))
   store.dispatch(addComment(event1.event.id, { commentBody: 'this is my another comment', commenter: 'Kylu' }))
   // store.dispatch(removeComment(event1.event.id, event1.event.comments[0].id))
   // store.dispatch(editComment(event1.event.id, event1.event.comments[0].id, { commentBody: ' tes tes test' }))

   store.subscribe(()=> {
      console.log(store.getState())
   })

   console.log(store.getState())

   const jsx = (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   )

ReactDOM.render(jsx, document.querySelector('#app'))