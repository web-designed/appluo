import React from 'react'
import { filterByName, filterByPlace, sortAsc, sortDesc, setEndDate, setStartDate } from '../actions/filters'
import { connect } from 'react-redux'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import uuid from 'uuid'

export class Sorting extends React.Component {

   state = {
      focusedInput: null
   }

   onDatesChange = ({ startDate, endDate }) => {
      // this line handles the case of selecting endDate that is before the startDate
      // in this case the datePicker returns null, which would crash the programm
      endDate = endDate === null ? this.props.filters.endDate : endDate
      // startDate = startDate === null ? this.props.settings.createdAt : startDate

      this.props.setEndDate(endDate)
      this.props.setStartDate(startDate)
   }

   onFocusChange = (focusedInput) => {
      this.setState(() => ({ focusedInput }))
   }

   // handleTextFilter = (e) => {
   //    this.props.dispatch(setTextFilter(e.target.value))
   // }

   handleFilterByName = (e) => {
      this.props.filterByName(e.target.value)
   }

   handleFilterByPlace = (e) => {
      this.props.filterByPlace(e.target.value)
   }

   handleSorting = (e) => {
      e.target.value === 'asc' ? this.props.sortAsc() : this.props.sortDesc()
   }

   render(){

      const hideSort = this.props.hideFilters.indexOf('sort') !== -1

      return (
         <div>
            <p>
               {
               // <input 
               //    type="text" 
               //    placeholder="search" 
               //    value={this.props.filters.text} 
               //    onChange={this.handleTextFilter} 
               // />
               }
               Filter by:<br/>
               <label for="place">place</label>
               <select 
                  name="place"
                  onChange={this.handleFilterByPlace}
               >
                  <option value="all">All</option>
                  {this.props.settings.places.map((place, index) => {
                     return (
                        <option 
                           value={place.toLowerCase()} 
                           key="index"
                           selected = {place.toLowerCase() === this.props.filters.filterByPlace}
                        >
                           {place}
                        </option>
                     )
                  })}
               </select>

               <label for="cleaner">Name</label>
               <select 
                  onChange={this.handleFilterByName}
                  name="cleaner"
               >
                  <option value="all">All</option>
                  {this.props.settings.cleaners.map((cleaner, index) => {
                     return (
                        <option 
                           value={cleaner.toLowerCase()} 
                           key={index}
                           selected = {cleaner.toLowerCase() === this.props.filters.filterByName}
                        >
                           {cleaner}
                        </option>
                     )
                  })}
               </select>

               <label>Date:</label>
               <DateRangePicker 
                  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                  startDateId={'startDateId'}
                  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                  endDateId={'endDateId'}
                  onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                  numberOfMonths = {1}
                  isOutsideRange = {() => false}
                  showClearDates = {true}
               />
            </p>
            {
               !hideSort && (<p>
                  <label for="sort">Sort</label>
                  <select 
                     value={this.props.filters.sort.toLowerCase()} 
                     onChange={this.handleSorting}
                     name="sort"
                  >
                     <option value="asc">ASC</option>
                     <option value="desc">DESC</option>
                  </select>
               </p>)
            }
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   setEndDate: (endDate) => dispatch(setEndDate(endDate)),
   setStartDate: (startDate) => dispatch(setStartDate(startDate)),
   filterByName: (name) => dispatch(filterByName(name)),
   filterByPlace: (place) => dispatch(filterByPlace(place)),
   sortAsc: () => dispatch(sortAsc()),
   sortDesc: () => dispatch(sortDesc())
   
})

const mapStateToProps = ({ filters, settings }) => ({
   filters: filters,
   settings: settings
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)