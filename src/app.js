
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import { addEvent, addComment } from './actions/events'
import { setTextFilter, filterByName, filterByPlace } from './actions/filters'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';


   const store = configStore()

   const event0 = store.dispatch(addEvent({ id:'0', cleanedAt:moment('2018-01-01').valueOf(), createdAt:moment().valueOf(), note:'test', cleaner: 'kylu', place: 'Küche'}))
   const event1 = store.dispatch(addEvent({ id:'1', cleanedAt:moment('2018-12-10').valueOf(), createdAt:moment().valueOf(), note:'test', cleaner: 'kylu', place: 'Küche'}))
   const event2 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'test2', cleaner: 'Kylu', place: 'Küche'}))
   const event3 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'test3', cleaner: 'till', place: 'Flur'}))
   const event4 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'my note', cleaner: 'chris', place: 'Bad'}))
   const event5 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'my note', cleaner: 'chris', place: 'Flur'}))
   const event6 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-06').valueOf(), createdAt:moment().valueOf(), cleaner: 'Kylu', place: 'Bad'}))
   const event7 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-03').valueOf(), createdAt:moment().valueOf(), cleaner: 'chris', place: 'Bad'}))
   const event8 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-02').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Alex', place: 'Bad'}))
   const event9 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-09').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Alex', place: 'Küche'}))
   const event10 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-16').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Kylu', place: 'Flur'}))
   const event11 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-17').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Till', place: 'Bad'}))
   const event12 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-20').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Alex', place: 'Flur'}))
   const event13 = store.dispatch(addEvent({ cleanedAt:moment('2018-11-20').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Alex', place: 'Flur'}))
   const event14 = store.dispatch(addEvent({ cleanedAt:moment('2018-10-20').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Alex', place: 'Flur'}))
   const event15 = store.dispatch(addEvent({ cleanedAt:moment('2018-10-21').valueOf(), createdAt:moment().valueOf(), note:'bad geputzt', cleaner: 'Alex', place: 'Flur'}))

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

   // store.subscribe(()=> {
   //    console.log(store.getState())
   // })

   // console.log(store.getState())

   const jsx = (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   )

ReactDOM.render(jsx, document.querySelector('#app'))