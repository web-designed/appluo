import React from 'react'
import AddEventForm from './AddEventForm'
import { addEvent } from '../actions/events'
import { connect } from 'react-redux'

const AddEventPage = (props) => (
   <div>
      <h1>Add a cleaning</h1>
      <AddEventForm 
         handleSubmit={ (event) => {
            props.onSubmit(event)
            props.history.push('/')
         }} 
         history={props.history} 
      />
   </div>
)

const mapDispatchToProps = (dispatch) => ({
   onSubmit: (expense) => dispatch(addEvent(expense))
})

export default connect(undefined, mapDispatchToProps)(AddEventPage)