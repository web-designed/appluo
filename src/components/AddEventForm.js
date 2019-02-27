import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import { Link } from 'react-router-dom'

export class AddEventForm extends React.Component {

   state = {
      date: this.props.cleanedAt ? moment(this.props.cleanedAt) : moment(),
      focused: false,
      note: this.props.note ? this.props.note : '',
      place: this.props.place ? this.props.place : this.props.settings.places[0],
      error: '',
      cleaner: this.props.cleaner ? this.props.cleaner : this.props.settings.cleaners[0],
   }

   onCleanerChange = (e) => {
      const cleaner = e.target.value
      this.setState(() => ({ cleaner }))
   }

   onPlaceChange = (e) => {
      const place = e.target.value
      this.setState(() => ({ place }))
   }

   onNoteChange = (e) => {
      const note = e.target.value
      this.setState(() => ({ note }))
   }

   onDateChange = (date) => {
      this.setState(() => ({ date }))
   }

   onFocusChange = ({focused}) => {
      this.setState(() => ({focused}))
   }

   handleSubmit = (e) => {

      e.preventDefault()
      
      const event = {
         cleanedAt: this.state.date.valueOf(),
         createdAt: moment().valueOf(),
         cleaner: this.state.cleaner,
         place: this.state.place,
         note: this.state.note,
      }

      this.props.handleSubmit(event)
   }

   render(){

      console.log(this.props)

      return(
         <div>
            <form onSubmit={this.handleSubmit}>
               <div class="input-group mb-2">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="cleaner">Name</label>
                  </div>
                  <select 
                     class="custom-select" 
                     id="cleaner"
                     name="cleaner" 
                     onChange={this.onCleanerChange}
                     value={this.state.cleaner.toLowerCase()}
                  >
                     {
                        this.props.settings.cleaners.map( cleaner => {
                           return <option value={cleaner.toLowerCase()} key={cleaner.toLowerCase()}>{cleaner}</option>
                        })
                     }
                  </select>
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="place">Place</label>
                  </div>
                  <select 
                     class="custom-select" 
                     id="place"
                     name="place" 
                     onChange={this.onPlaceChange}
                     value={this.state.place.toLowerCase()}
                  >
                     {
                        this.props.settings.places.map( place => {
                           return <option value={place.toLowerCase()} key={place}>{place}</option>
                        })
                     }
                  </select>
               </div>
               <div class="input-group mb-2">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="date">Date</label>
                  </div>
                  <SingleDatePicker 
                     date={this.state.date}
                     onDateChange={this.onDateChange}
                     focused={this.state.focused}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     isOutsideRange={() => false}
                  />
               </div>
               <div class="form-group">
                  <textarea 
                     class="form-control"
                     value={this.state.note}
                     name="note" 
                     placeholder="Add your note"
                     onChange={this.onNoteChange}
                  ></textarea>
               </div>
               <div class="form-group text-right">
                  <Link class="text-danger mr-2" to={'/'}>Cancel</Link>
                  <button class="btn btn-primary">Submit</button>
               </div>
            </form>
         </div>
      )
   }
}

const mapStateToProps = ({ settings }) => ({
   settings: settings
})

export default connect(mapStateToProps)(AddEventForm)