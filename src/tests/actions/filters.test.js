
import moment from 'moment'
import { 
   setTextFilter, 
   sortAsc, 
   sortDesc, 
   filterByName, 
   filterByPlace,
   setStartDate,
   setEndDate 
} from '../../actions/filters'

test('should generate the setTextFilter action object', () => {
   const action = setTextFilter('test')
   expect(action).toEqual({
      type:'SET_TEXT_FILTER',
      text: 'test'
   })
})

test('should generate the sort ascending action object', () => {
   const action = sortAsc()
   expect(action).toEqual({
      type: 'SORT_ASCENDING'
   })
})

test('should generate the sort descending action object', () => {
   const action = sortDesc()
   expect(action).toEqual({
      type: 'SORT_DESCENDING'
   })
})

test('should generate the filter by name action object', () => {
   const action = filterByName('kylu')
   expect(action).toEqual({
      type: 'FILTER_BY_NAME',
      name: 'kylu'
   })
})

test('should generate the filter by place action object', () => {
   const action = filterByPlace('küche')
   expect(action).toEqual({
      type: 'FILTER_BY_PLACE',
      place: 'küche'
   })
})

test('should generate the set start date action object', () => {
   const action = setStartDate(moment(0))
   expect(action).toEqual({
      type: 'SET_START_DATE',
      date: moment(0)
   })
})

test('should generate the set end date action object', () => {
   const action = setEndDate(moment(0))
   expect(action).toEqual({
      type: 'SET_END_DATE',
      date: moment(0)
   })
})