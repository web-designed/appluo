import React from 'react'
import { setTextFilter, filterByName, filterByPlace, sortAsc, sortDesc } from '../actions/filters'
import { connect } from 'react-redux'

const Sorting = ( {settings, filters, dispatch }) => {

   const handleTextFilter = (e) => {
      dispatch(setTextFilter(e.target.value))
   }

   const handleFilterByName = (e) => {
      dispatch(filterByName(e.target.value))
   }

   const handleFilterByPlace = (e) => {
      dispatch(filterByPlace(e.target.value))
   }

   const handleSorting = (e) => {
      e.target.value === 'asc' ? dispatch(sortAsc()) : dispatch(sortDesc())
   }

   console.log(filters.filterByName)

   return (
      <div>
         <input 
            type="text" 
            placeholder="search" 
            value={filters.text} 
            onChange={handleTextFilter} 
         />

         <select 
            onChange={handleFilterByPlace}
         >
            <option value="all">All</option>
            {settings.places.map((place, index) => {
               return (
                  <option 
                     value={place.toLowerCase()} 
                     key="index"
                     selected = {place.toLowerCase() === filters.filterByPlace}
                  >
                     {place}
                  </option>
               )
            })}
         </select>

         <select 
            onChange={handleFilterByName}
         >
            <option value="all">All</option>
            {settings.cleaners.map((cleaner, index) => {
               return (
                  <option 
                     value={cleaner.toLowerCase()} 
                     key={index}
                     selected = {cleaner.toLowerCase() === filters.filterByName}
                  >
                     {cleaner}
                  </option>
               )
            })}
         </select>

         <select onChange={handleSorting}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
         </select>
      </div>
   )
}

const mapStateToProps = ({filters, settings}) => ({
   filters: filters,
   settings: settings
})

export default connect(mapStateToProps)(Sorting)