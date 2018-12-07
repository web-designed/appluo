import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentsList from './CommentsList'
import moment from 'moment'
import { removeEvent } from '../actions/events'

class ViewEventPage extends React.Component {

   state = {
      notification: ''
   }

   handleRemoveEvent(id){
      this.setState(() => ({
         notification: 'the cleaning was removed'
      }))
      this.props.dispatch(removeEvent(id))
      setTimeout(() => {
         this.props.history.push('/')
      }, 2000);
   }

   getCurrentEvent(events){
      return events.find((event) => {
         return event.id === this.props.match.params.id
      })
   }

   render(){
      if(this.getCurrentEvent(this.props.events)){
         return (
            <div>
               <h1>{this.getCurrentEvent.place}</h1>
               <h2>{this.getCurrentEvent.cleaner} : {moment(this.getCurrentEvent.cleanedAt).format('YYYY-MM-D')}</h2>
               <p>{this.getCurrentEvent.note}</p>
               <p><button onClick={() => { this.handleRemoveEvent(this.props.match.params.id) }}>remove</button> - <Link to={`/edit/${this.props.match.params.id}`}><button>Edit</button></Link></p>
               <CommentsList currentEvent={this.getCurrentEvent(this.props.events)} />
            </div>
         )
      } else {
         return (
            <div>
               <h1>This cleaning was removed</h1>
               <Link to="/"><button>Dashboard</button></Link>
            </div>
         )
      }
   }
}

const mapStateToProps = (state) => ({
   events: state.events
})

export default connect(mapStateToProps)(ViewEventPage)