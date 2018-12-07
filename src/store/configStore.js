//*******************************************************
// CONFIGURE REDUX STORE
//*******************************************************

   import { createStore, combineReducers } from 'redux'
   import settingsReducer from '../reducers/settings'
   import eventsReducer from '../reducers/events'
   import filtersReducer from '../reducers/filters'

   const configStore = () => {
      const store = createStore(
         combineReducers({
            settings: settingsReducer,
            events: eventsReducer,
            filters: filtersReducer
         }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

      )
      return store
   }

   export default configStore
