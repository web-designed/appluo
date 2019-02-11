import React from 'react'
import AddEventForm from './AddEventForm'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editEvent } from '../actions/events'

const EditEventPage = ( props ) => {

   const currentEvent = props.events.find((event) => {
      return event.id === props.match.params.id
   })

   if(currentEvent){
      return(
         <div>
            <h1>Edit your cleaning</h1>
            <AddEventForm 
               history={props.history}  
               cleaner={currentEvent.cleaner}
               place={currentEvent.place}
               cleanedAt={currentEvent.cleanedAt}
               note={currentEvent.note}
               handleSubmit={ (event) => {
                  props.dispatch(editEvent(currentEvent.id, event))
                  props.history.push('/')
               }}
            />
         </div>
      )
   } else {
      return (
         <div>
            <h1>This cleaning event was removed</h1>
            <Link to="/"><button>Dashboard</button></Link>
         </div>
      )
   }

}

const mapStateToProps = (state) => ({
   events: state.events
})

export default connect(mapStateToProps)(EditEventPage)