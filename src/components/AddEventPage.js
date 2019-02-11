import React from 'react'
import AddEventForm from './AddEventForm'
import { addEvent } from '../actions/events'
import { connect } from 'react-redux'

const AddEventPage = (props) => {
   return(
      <div>
         <h1>Add a cleaning</h1>
         <AddEventForm handleSubmit={ (event) => {
            props.dispatch(addEvent(event))
            props.history.push('/')
         }} history={props.history} />
      </div>
   )
}

export default connect()(AddEventPage)