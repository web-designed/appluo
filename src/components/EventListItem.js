import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CommentCount from './CommentCount'

const EventListItem = ({ cleaner, place, cleanedAt, id, comments }) => {

   return (
      <div>
         <Link to={`/view/${id}`}>
            <div>
               <p>{place} | <strong>{cleaner}</strong> | {moment(cleanedAt).format('YYYY-MM-D')} | <CommentCount commentsCount={comments.length}/></p>
            </div>
         </Link>
      </div>
   )
}

export default connect()(EventListItem)