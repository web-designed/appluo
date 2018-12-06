import React from 'react'
import { connect } from 'react-redux'
import { removeEvent } from '../actions/events'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EventListItem = ({ cleaner, place, cleanedAt, id, dispatch }) => {

   const handleRemoveEvent = (id) => {
      dispatch(removeEvent(id))
   }

   return (
      <div>
         <Link to={`/view/${id}`}>
            <div>
               <p>{place} | <strong>{cleaner}</strong> | {moment(cleanedAt).format('YYYY-MM-e')}</p>
            </div>
         </Link>
         <p><button onClick={() => { handleRemoveEvent(id) }}>remove</button></p>
      </div>
   )
}

export default connect()(EventListItem)