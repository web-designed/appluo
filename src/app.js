
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

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))