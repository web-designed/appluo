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
         })
      )
      return store
   }

   export default configStore
