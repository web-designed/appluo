//*******************************************************
// CONFIGURE REDUX STORE
//*******************************************************

   import { createStore, combineReducers, applyMiddleware } from 'redux'
   import settingsReducer from '../reducers/settings'
   import eventsReducer from '../reducers/events'
   import filtersReducer from '../reducers/filters'
   import thunk from 'redux-thunk' //use functions as action vs objects only

   const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

   const configStore = () => {
      const store = createStore(
         combineReducers({
            settings: settingsReducer,
            events: eventsReducer,
            filters: filtersReducer
         }), composeEnhancers(applyMiddleware(thunk)))
      return store
   }

   export default configStore
