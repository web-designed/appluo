import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CommentsList from './CommentsList'

const ViewEvent = ({ match, events }) => {

   const currentEvent = events.filter((event) => {
      return event.id === Number(match.params.id)
   })[0]

   return (
      <div>
         <h1>{currentEvent.place}</h1>
         <h2>{currentEvent.cleaner} : {currentEvent.cleanedAt}</h2>
         <p>{currentEvent.note}</p>
         <Link to={`edit/${match.params.id}`}><button>Edit</button></Link>
         <CommentsList currentEvent={currentEvent} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   events: state.events
})

export default connect(mapStateToProps)(ViewEvent)