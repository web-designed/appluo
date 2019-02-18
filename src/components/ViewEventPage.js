import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentsList from './CommentsList'
import moment from 'moment'
import { removeEvent } from '../actions/events'
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
         this.props.removeEvent(this.props.event.id)
         this.props.history.push('/')
      }, 2000);
   }

   render(){
      if(this.props.event){
         return (
            <div>
               {
                 !this.state.eventDeletedNotification ? (
                     <div>
                        <h1>{this.props.event.place}</h1>
                        <h2>{this.props.event.cleaner} : {moment(this.props.event.cleanedAt).format('YYYY-MM-D')}</h2>
                        <p>{this.props.event.note}</p>
                        <p>
                           <button onClick={this.handleRemoveEvent}>remove</button> 
                           <Link to={`/edit/${this.props.event.id}`}><button>Edit</button></Link>
                        </p>
                        <div>
                           <CommentsList currentEvent={this.props.event} />
                           <CommentAddForm currentEventId={this.props.event.id} />
                        </div>
                     </div>
                  ) : (
                     <div>
                        <h1>{this.state.eventDeletedNotification}</h1>
                        <Link to="/"><button>Dashboard</button></Link>
                     </div>
                  )
               }
            </div>
         )
      } else {
         return (
            <div>
               <h1>{this.props.notifications.notFound}</h1>
               <Link to="/"><button>Dashboard</button></Link>
            </div>
         )
      }
   }
}

const mapDispatchToProps = (dispatch, props) => ({
   removeEvent: (eventId) => { dispatch(removeEvent(eventId)) }
})

const mapStateToProps = (state, props) => ({
   notifications: state.settings.notifications.event,
   event: state.events.find((event) => {
      return event.id === props.match.params.id
   })
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewEventPage)