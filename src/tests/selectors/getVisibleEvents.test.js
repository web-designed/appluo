import getVisibleEvents from '../../selectors/getVisibleEvents'
import moment from 'moment'
import events from '../fixtures/events'


test('should filter by cleaners name', () => {
   const filters = {
      text: '',
      filterByName: 'kylu',
      filterByPlace: 'all',
      sort: 'DESC',
      startDate: undefined,
      endDate: undefined
   }
   const result = getVisibleEvents(events, filters)
   expect(result).toEqual([
      events[0]
   ])
})

test('should filter by place', () => {
   const filters = {
      text: '',
      filterByName: 'all',
      filterByPlace: 'küche',
      sort: 'DESC',
      startDate: undefined,
      endDate: undefined
   }
   const result = getVisibleEvents(events, filters)
   expect(result).toEqual([
      events[1]
   ])
})

test('should filter by startDate', () => {
   const filters = {
      text: '',
      filterByName: 'all',
      filterByPlace: 'küche',
      sort: 'DESC',
      startDate: moment(0),
      endDate: undefined
   }
   const result = getVisibleEvents(events, filters)
   console.log(result)
   // expect(result).toEqual([
   //    events[1]
   // ])
})