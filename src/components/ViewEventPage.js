import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentsList from './CommentsList'
import moment from 'moment'
import { startRemoveEvent } from '../actions/events'
import CommentAddForm from './CommentAddForm'

export class ViewEventPage extends React.Component {

   state = {
      eventDeletedNotification: ''
   }

   handleRemoveEvent = () => {
      this.setState(() => ({
         eventDeletedNotification: this.props.notifications.afterDelete
      }))
      setTimeout(() => {
         this.props.startRemoveEvent(this.props.event.id)
         this.props.history.push('/')
      }, 2000);
   }

   render(){
      if(this.props.event){
         return (
            <div class="container-fluid">
               {
                  !this.state.eventDeletedNotification ? (
                     <div class="pt-3 row justify-content-center">
                        <div class="col-md-6">
                           <div class="card mb-3">
                              <div class="card-header d-flex justify-content-between align-items-center">
                                 <div>
                                    <h5 class="mb-0">{this.props.event.place}</h5>
                                 </div>
                                 <div>
                                    <small class="text-secondary">cleaned by:</small> {this.props.event.cleaner} <small class="text-secondary">on:</small> {moment(this.props.event.cleanedAt).format('YYYY/MM/D')}
                                 </div>
                              </div>
                              {
                                 this.props.event.note && (
                                    <div class="card-body">
                                       <h6 class="card-subtitle mb-2 text-muted"></h6>
                                       <p class="card-text">{this.props.event.note}</p>
                                    </div>
                                 )
                              }
                              <div class="card-footer text-muted">
                                 <button class="btn btn-danger mr-1" onClick={this.handleRemoveEvent}>remove</button> 
                                 <Link class="btn btn-primary" to={`/edit/${this.props.event.id}`}>Edit</Link>
                              </div>
                           </div>
                           <div>
                              <CommentsList currentEvent={this.props.event} />
                              <CommentAddForm currentEventId={this.props.event.id} />
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div class="pt-3 row justify-content-center">
                        <div class="col-md-6">
                           <h3>{this.state.eventDeletedNotification}</h3>
                           <Link to="/"><button class="btn btn-primary">Dashboard</button></Link>
                        </div>
                     </div>
                  )
               }
            </div>
         )
      } else {
         return (
            <div class="container-fluid">
               <h1>{this.props.notifications.notFound}</h1>
               <Link to="/"><button>Dashboard</button></Link>
            </div>
         )
      }
   }
}

const mapDispatchToProps = (dispatch, props) => ({
   startRemoveEvent: (eventId) => { dispatch(startRemoveEvent(eventId)) }
})

const mapStateToProps = (state, props) => ({
   notifications: state.settings.notifications.event,
   event: state.events.find((event) => {
      return event.id === props.match.params.id
   })
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewEventPage)