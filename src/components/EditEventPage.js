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
         <div>
            {
               this.props.event ? (
                  <div>
                     <h1>Edit your cleaning</h1>
                     <AddEventForm 
                        history={this.props.history}  
                        cleaner={this.props.event.cleaner}
                        place={this.props.event.place}
                        cleanedAt={this.props.event.cleanedAt}
                        note={this.props.event.note}
                        handleSubmit={this.handleSubmit}
                     />
                  </div>
               ) : (
                  <div>
                     <h3>This Cleaning doesn't exist or has been removed</h3>
                     <Link to="/"><button>Dashboard</button></Link>
                     <Link to="/add"><button>Add Cleaning</button></Link>
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