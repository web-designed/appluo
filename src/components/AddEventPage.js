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
         <div class="container-fluid">
            <div class="pt-3 row justify-content-center">
               <div class="col-md-6">
                  <div class="card">
                     <div class="card-header">
                        <h4 class="mb-0">Add a cleaning</h4>
                     </div>
                     <div class="card-body">
                        <AddEventForm 
                           handleSubmit={this.handleSubmit}
                           history={this.props.history}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   addEvent: (expense) => dispatch(addEvent(expense))
})
export default connect(undefined, mapDispatchToProps)(AddEventPage)