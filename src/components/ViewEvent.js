import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ViewEvent = ({ match, events }) => {

   const currentEvent = events.filter((event) => {
      return event.id === Number(match.params.id)
   })

   return (
      <div>
         <h1>{currentEvent[0].place}</h1>
         <h2>{currentEvent[0].cleaner} : {currentEvent[0].cleanedAt}</h2>
         <p>{currentEvent[0].note}</p>
         <Link to={`edit/${match.params.id}`}><button>Edit</button></Link>
      </div>
   )
}

const mapStateToProps = (state) => ({
   events: state.events
})

export default connect(mapStateToProps)(ViewEvent)