import React from 'react'
import AddEventForm from './AddEventForm'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { editEvent } from '../actions/events'

export class EditEventPage extends React.Component {

   handleSubmit = (event) => {
      this.props.editEvent(this.props.event.id, event)
      this.props.history.push('/')
   }

   render(){
      return (
         <div class="container-fluid">
            {
               this.props.event ? (
                  <div class="pt-3 row justify-content-center">
                     <div class="col-md-6">
                        <div class="card">
                           <div class="card-header">
                              <h4 class="mb-0">Edit your cleaning</h4>
                           </div>
                           <div class="card-body">
                              <AddEventForm 
                                 history={this.props.history}  
                                 cleaner={this.props.event.cleaner}
                                 place={this.props.event.place}
                                 cleanedAt={this.props.event.cleanedAt}
                                 note={this.props.event.note}
                                 handleSubmit={this.handleSubmit}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div class="pt-3 row justify-content-center">
                     <div class="col-md-6">
                        <h3>This Cleaning doesn't exist or has been removed</h3>
                        <Link class="btn btn-secondary mr-2" to="/">Dashboard</Link>
                        <Link class="btn btn-primary" to="/add">Add Cleaning</Link>
                     </div>
                  </div>
               )
            }
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   editEvent: (id, event) => dispatch(editEvent(id, event))
})

const mapStateToProps = (state, props) => ({
   event: state.events.find((event) => {
      return event.id === props.match.params.id
   })
})
export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage)