
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import { startSetEvents } from './actions/events'
import moment from 'moment'
import './styles/styles.scss'

const store = configStore()

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
)

ReactDOM.render(<p>loading...</p>, document.querySelector('#app'))

store.dispatch(startSetEvents()).then(() => {
   ReactDOM.render(jsx, document.querySelector('#app'))
})
