//*******************************************************
// FILTER ACTION GENERATORS
//*******************************************************

   const setTextFilter = (text) => ({
      type: 'SET_TEXT_FILTER',
      text
   })

   const sortAsc = () => ({
      type: 'SORT_ASCENDING'
   })

   const sortDesc = () => ({
      type: 'SORT_DESCENDING'
   })

   const filterByName = (name) => ({
      type: 'FILTER_BY_NAME',
      name
   })

   const filterByPlace = (place) => ({
      type: 'FILTER_BY_PLACE',
      place
   })

   const setStartDate = (date) => ({
      type: 'SET_START_DATE',
      date
   })

   const setEndDate = (date) => ({
      type: 'SET_END_DATE',
      date
   })

   export { setTextFilter, sortAsc, sortDesc, filterByName, filterByPlace, setStartDate, setEndDate }