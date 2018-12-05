import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addEvent } from '../actions/events'

class AddEventForm extends React.Component {

   state = {
      error: undefined
   }

   handleSubmit = (e) => {
      e.preventDefault()
      
      const event = {
         cleanedAt: 0,
         createdAt: 0,
         cleaner: e.target.elements.cleaner.value,
         place: e.target.elements.place.value,
         id: uuid(),
         note: e.target.elements.note.value,
         date: e.target.elements.date.value
      }

      this.props.dispatch(addEvent(event))

      // const error = this.props.handleAddEvent(event)
      // this.setState(() => {
      //    return { error }
      // })
   }

   render(){
      return(
         <div>
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
               <p>
                  <label htmlFor="name">Name</label>
                  <select name="cleaner">
                     {
                        this.props.settings.cleaners.map((cleaner) => {
                           return <option key={cleaner}>{cleaner}</option>
                        })
                     }
                  </select>
               </p>
               <p>
                  <label htmlFor="place">Wo</label>
                  <select name="place">
                     {
                        this.props.settings.places.map((place) => {
                           return <option key={place}>{place}</option>
                        })
                     }
                  </select>
               </p>
               <p>
                  <label htmlFor="date">Datum</label>
                  <input type="text" name="date"/>
                  {this.state.error && <span>{this.state.error}</span>}
               </p>
               <p>
                  <label htmlFor="note">Note</label>
                  <textarea name="note" placeholder="zB: Alles sauber gemacht"></textarea>
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