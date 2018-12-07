//*******************************************************
// FILTERS REDUCER
//*******************************************************

   import moment from 'moment'

   const filtersReducerDefaultState = {
      text: '',
      filterByName: 'all',
      filterByPlace: 'all',
      sort: 'DESC',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   }

   const filtersReducer = (state = filtersReducerDefaultState, action) => {
      switch(action.type){
         case 'SET_TEXT_FILTER':
            return {
               ...state,
               text: action.text
            }
         case 'SORT_ASCENDING':
            return {
               ...state,
               sort: 'ASC'
            }
         case 'SORT_DESCENDING':
            return {
               ...state,
               sort: 'DESC'
            }
         case 'FILTER_BY_NAME':
            return {
               ...state,
               filterByName: action.name
            }
         case 'FILTER_BY_PLACE':
            return {
               ...state,
               filterByPlace: action.place
            }
         case 'SET_START_DATE':
            return {
               ...state,
               startDate: action.date
            }
         case 'SET_END_DATE':
            return {
               ...state,
               endDate: action.date
            }
         default: 
            return state
      }
   }

   export default filtersReducer