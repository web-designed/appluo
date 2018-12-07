import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentsList from './CommentsList'
import moment from 'moment'

const ViewEventPage = ({ match, events }) => {

   const currentEvent = events.filter((event) => {
      return event.id === match.params.id
   })[0]

   return (
      <div>
         <h1>{currentEvent.place}</h1>
         <h2>{currentEvent.cleaner} : {moment(currentEvent.cleanedAt).format('YYYY-MM-D')}</h2>
         <p>{currentEvent.note}</p>
         <Link to={`edit/${match.params.id}`}><button>Edit</button></Link>
         <CommentsList currentEvent={currentEvent} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   events: state.events
})

export default connect(mapStateToProps)(ViewEventPage)