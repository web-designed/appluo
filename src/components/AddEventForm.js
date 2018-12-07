import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addEvent } from '../actions/events'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class AddEventForm extends React.Component {

   state = {
      date: this.props.cleanedAt ? moment(this.props.cleanedAt) : moment(),
      focused: false,
      note: this.props.note ? this.props.note : '',
      place: this.props.place ? this.props.place : 'küche',
      error: '',
      cleaner: this.props.cleaner ? this.props.cleaner : 'kylu',
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
      this.props.dispatch(addEvent(event))
      this.props.history.push('/')
   }

   render(){
      return(
         <div>
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
               <p>
                  <label htmlFor="name">Name</label>
                  <select 
                     name="cleaner" 
                     onChange={this.onCleanerChange}
                     value={this.state.cleaner}
                  >
                     {
                        this.props.settings.cleaners.map((cleaner) => {
                           return <option value={cleaner.toLowerCase()} key={cleaner}>{cleaner}</option>
                        })
                     }
                  </select>
               </p>
               <p>
                  <label htmlFor="place">Wo</label>
                  <select 
                     name="place" 
                     onChange={this.onPlaceChange}
                     value={this.state.place}
                  >
                     {
                        this.props.settings.places.map((place) => {
                           return <option value={place.toLowerCase()} key={place}>{place}</option>
                        })
                     }
                  </select>
               </p>
               <p>
                  <SingleDatePicker 
                     date={this.state.date}
                     onDateChange={this.onDateChange}
                     focused={this.state.focused}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     isOutsideRange={() => false}
                  />
               </p>
               <p>
                  <label htmlFor="note">Note</label>
                  <textarea 
                     value={this.state.note}
                     name="note" 
                     placeholder="zB: Alles sauber gemacht"
                     onChange={this.onNoteChange}
                  ></textarea>
               </p>
               <p><button>Submit</button></p>
            </form>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   settings: state.settings
})

export default connect(mapStateToProps)(AddEventForm)