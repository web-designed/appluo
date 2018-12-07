import React from 'react'
import { filterByName, filterByPlace, sortAsc, sortDesc, setEndDate, setStartDate } from '../actions/filters'
import { connect } from 'react-redux'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import uuid from 'uuid'

class Sorting extends React.Component {

   state = {
      focusedInput: null
   }

   onDatesChange = ({ startDate, endDate }) => {
      this.props.dispatch(setEndDate(endDate))
      this.props.dispatch(setStartDate(startDate))
   }

   onFocusChange = (focusedInput) => {
      this.setState(() => ({ focusedInput }))
   }

   // handleTextFilter = (e) => {
   //    this.props.dispatch(setTextFilter(e.target.value))
   // }

   handleFilterByName = (e) => {
      this.props.dispatch(filterByName(e.target.value))
   }

   handleFilterByPlace = (e) => {
      this.props.dispatch(filterByPlace(e.target.value))
   }

   handleSorting = (e) => {
      e.target.value === 'asc' ? this.props.dispatch(sortAsc()) : this.props.dispatch(sortDesc())
   }

   render(){
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
               <select 
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

               <select 
                  onChange={this.handleFilterByName}
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

               <select value={this.props.filters.sort.toLowerCase()} onChange={this.handleSorting}>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
               </select>

               <DateRangePicker 
                  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                  startDateId={uuid()}
                  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                  endDateId={uuid()}
                  onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                  numberOfMonths = {1}
                  isOutsideRange = {() => false}
                  showClearDates = {true}
               />
            </p>
         </div>
      )
   }
}

const mapStateToProps = ({filters, settings}) => ({
   filters: filters,
   settings: settings
})

export default connect(mapStateToProps)(Sorting)