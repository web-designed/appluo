import React from 'react'
import { connect } from 'react-redux'
import { removeEvent } from '../actions/events'
import { Link } from 'react-router-dom'

const EventListItem = ({ cleaner, place, cleanedAt, note, id, dispatch }) => {

   const handleRemoveEvent = (id) => {
      dispatch(removeEvent(id))
   }

   return (
      <div>
         <Link to={`/view/${id}`}>
            <div>
               <strong>{cleaner}</strong> | 
               {place} | 
               {cleanedAt} | 
               {note} 
            </div>
         </Link>
         <button onClick={() => { handleRemoveEvent(id) }}>remove</button>
      </div>
   )
}

export default connect()(EventListItem)