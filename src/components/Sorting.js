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
            {
            // <input 
            //    type="text" 
            //    placeholder="search" 
            //    value={this.props.filters.text} 
            //    onChange={this.handleTextFilter} 
            // />
            }
            <h6>Filter & Sort</h6>
            <div class="row">
               {
                  !hideSort && (
                     <div class="input-group col-md-3 col-lg-2 mb-3">
                        <div class="input-group-prepend">
                           <label class="input-group-text" for="sorting">Sort</label>
                        </div>
                        <select 
                           name="sorting"
                           onChange={this.handleSorting}
                           class="custom-select" 
                           id="sorting"
                           value={this.props.filters.sort.toLowerCase()} 
                        >
                           <option value="asc">ASC</option>
                           <option value="desc">DESC</option>
                        </select>
                     </div>
                  )
               }
               <div class="input-group col-lg-3 mb-3">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="place">Place</label>
                  </div>
                  <select 
                     name="place"
                     onChange={this.handleFilterByPlace}
                     class="custom-select" 
                     id="place"
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
               </div>
               
               <div class="input-group col-lg-2 mb-3">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="cleaners">Cleaners</label>
                  </div>
                  <select 
                     onChange={this.handleFilterByName}
                     name="cleaner"
                     id="cleaners"
                     class="custom-select"
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
               </div>

               <div class="input-group col-md-9 col-lg-5 mb-3">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="cleaners">Date</label>
                  </div>
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
               </div>
            </div> 
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