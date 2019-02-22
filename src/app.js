
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import { addEvent, addComment } from './actions/events'
import { setTextFilter, filterByName, filterByPlace } from './actions/filters'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/datePicker_custom.css'


   const store = configStore()

   const event0 = store.dispatch(addEvent({ id:'0', cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Tom', place: 'Kitchen'}))
   const event1 = store.dispatch(addEvent({ id:'1', cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'lorem ipsum text', cleaner: 'Tom', place: 'Kitchen'}))
   const event2 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Tom', place: 'Kitchen'}))
   const event3 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'John', place: 'Saloon'}))
   const event4 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Steve', place: 'Bathroom'}))
   const event5 = store.dispatch(addEvent({ cleanedAt:moment().valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Steve', place: 'Saloon'}))
   const event6 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-06').valueOf(), createdAt:moment().valueOf(), cleaner: 'Tom', place: 'Bathroom'}))
   const event7 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-03').valueOf(), createdAt:moment().valueOf(), cleaner: 'Steve', place: 'Bathroom'}))
   const event8 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-02').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Alex', place: 'Bathroom'}))
   const event9 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-09').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Alex', place: 'Kitchen'}))
   const event10 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-16').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Tom', place: 'Saloon'}))
   const event11 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-17').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'John', place: 'Bathroom'}))
   const event12 = store.dispatch(addEvent({ cleanedAt:moment('2018-12-20').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Alex', place: 'Saloon'}))
   const event13 = store.dispatch(addEvent({ cleanedAt:moment('2018-11-20').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Alex', place: 'Saloon'}))
   const event14 = store.dispatch(addEvent({ cleanedAt:moment('2018-10-20').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Alex', place: 'Saloon'}))
   const event15 = store.dispatch(addEvent({ cleanedAt:moment('2018-10-21').valueOf(), createdAt:moment().valueOf(), note:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident doloremque magni neque sed quas architecto veniam esse suscipit nemo libero aut itaque repudiandae incidunt sit alias eum, ea quasi?', cleaner: 'Alex', place: 'Saloon'}))

   // store.dispatch(setTextFilter('note'))

   // store.dispatch(removeEvent(event1.event.id))
   // store.dispatch(editEvent(event2.event.id, {cleaner:'Steve'} ))
   // store.dispatch(setTextFilter('bad'))
   // store.dispatch(sortAsc())
   // store.dispatch(sortDesc())
   // store.dispatch(filterByPlace('Kitchen'))
   // store.dispatch(filterByName('Steve'))
   // store.dispatch(setStartDate(20))
   // store.dispatch(setEndDate(10000))
   store.dispatch(addComment(event1.event.id, { commentBody: 'Good Job man!', commenter: 'John' }))
   store.dispatch(addComment(event4.event.id, { commentBody: 'Hmmmm the kitchen sink?', commenter: 'Alex' }))
   store.dispatch(addComment(event2.event.id, { commentBody: 'Thanks for clening Tom', commenter: 'John' }))
   store.dispatch(addComment(event2.event.id, { commentBody: 'No problem man!', commenter: 'Tom' }))
   store.dispatch(addComment(event3.event.id, { commentBody: 'Finaly everything is shining', commenter: 'Tom' }))
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