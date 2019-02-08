import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CommentCount from './CommentCount'

export const EventListItem = ({ cleaner, place, cleanedAt, id, comments, note }) => {
   return (
      <div>
         <Link to={`/view/${id}`}>
            <div>
               <p>{place} | <strong>{cleaner}</strong> | {moment(cleanedAt).format('YYYY-MM-DD')} | <CommentCount commentsCount={comments.length}/> {note && <span> | N</span>}</p>
            </div>
         </Link>
      </div>
   )
}

export default connect()(EventListItem)