import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should set up the default filter values', () => {
   const state = filtersReducer(undefined, '@@INIT')
   expect(state).toEqual({
      text:'',
      filterByName: 'all',
      filterByPlace: 'all',
      sort: 'DESC',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
})

test('should set the text filter', () => {
   const text = 'my text'
   const action = {
      type: 'SET_TEXT_FILTER',
      text
   }
   const state = filtersReducer(undefined, action)
   expect(state.text).toBe(text)
})

test('should set the sort ascending filter', () => {
   const state = filtersReducer(undefined, {type: 'SORT_ASCENDING'})
   expect(state.sort).toBe('ASC')
})

test('should set the sort descending filter', () => {
   const defaultState = {
      text: '',
      filterByName: 'all',
      filterByPlace: 'all',
      sort: 'ASC',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   }
   const state = filtersReducer(defaultState, {type: 'SORT_DESCENDING'})
   expect(state.sort).toBe('DESC')
})

test('should set the sort by name filter', () => {
   const name = 'kylu'
   const action = {
      type: 'FILTER_BY_NAME',
      name
   }
   const state = filtersReducer(undefined, action)
   expect(state.filterByName).toBe(name)
})

test('should set the filter by place filter', () => {
   const place = 'bad'
   const action = {
      type: 'FILTER_BY_PLACE',
      place
   }
   const state = filtersReducer(undefined, action)
   expect(state.filterByPlace).toBe(place)
})

test('should set the start date filter', () => {
   const startDate = moment()
   const action = {
      type: 'SET_START_DATE',
      date: startDate
   }
   const state = filtersReducer(undefined, action)
   expect(state.startDate).toEqual(startDate)
})

test('should set the end date filter', () => {
   const endDate = moment()
   const action = {
      type: 'SET_END_DATE',
      date: endDate
   }
   const state = filtersReducer(undefined, action)
   expect(state.endDate).toEqual(endDate)
})