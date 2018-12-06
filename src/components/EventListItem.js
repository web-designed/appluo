import React from 'react'
import { connect } from 'react-redux'
import { removeEvent } from '../actions/events'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CommentCount from './CommentCount'

const EventListItem = ({ cleaner, place, cleanedAt, id, comments, dispatch }) => {

   const handleRemoveEvent = (id) => {
      dispatch(removeEvent(id))
   }

   return (
      <div>
         <Link to={`/view/${id}`}>
            <div>
               <p>{place} | <strong>{cleaner}</strong> | {moment(cleanedAt).format('YYYY-MM-e')} | <CommentCount commentsCount={comments.length}/></p>
            </div>
         </Link>
         <p><button onClick={() => { handleRemoveEvent(id) }}>remove</button></p>
      </div>
   )
}

export default connect()(EventListItem)