import React from 'react'
import AddEventForm from './AddEventForm'
import { addEvent } from '../actions/events'
import { connect } from 'react-redux'

export class AddEventPage extends React.Component {

   handleSubmit = (event) => {
      this.props.addEvent(event)
      this.props.history.push('/')
   }

   render(){
      return(
         <div>
            <h1>Add a cleaning</h1>
            <AddEventForm 
               handleSubmit={this.handleSubmit}
               history={this.props.history}
            />
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   addEvent: (expense) => dispatch(addEvent(expense))
})
export default connect(undefined, mapDispatchToProps)(AddEventPage)