//*******************************************************
// EVENTS SELECTOR
//*******************************************************

   import moment from 'moment'

   const getVisibleEvents = (events, { text, filterByName, filterByPlace, sort, startDate, endDate} ) => {
      return events.filter((event) => {
         const isTextMatch = event.note.toLowerCase().includes(text.toLowerCase())
         const isFilterByNameMatch = filterByName === 'all' || !filterByName || event.cleaner.toLowerCase() === filterByName.toLowerCase()
         const isFilterByPlaceMatch = filterByPlace === 'all' || !filterByPlace || event.place.toLowerCase() === filterByPlace.toLowerCase()
         const isStartDateMatch = startDate ? moment(event.cleanedAt).isSameOrAfter(startDate, 'day') : true
         const isEndDateMatch = endDate ? moment(event.cleanedAt).isSameOrBefore(endDate, 'day') : true
         return isTextMatch && isFilterByNameMatch && isFilterByPlaceMatch && isStartDateMatch && isEndDateMatch
      }).sort((a, b) => {
         if(sort === 'ASC') {
            return a.cleanedAt < b.cleanedAt ? -1 : 1
         } else {
            return a.cleanedAt < b.cleanedAt ? 1 : -1
         }
      })
   }

   export default getVisibleEvents