import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CommentCount from './CommentCount'
import { iconNote } from '../assets/images'

export const EventListItem = ({ cleaner, place, cleanedAt, id, comments, note }) => {

   const commentsCount = comments ? comments.length : 0

   return (
      <Link to={`/view/${id}`} class="list-group-item flex-column align-items-start list-group-item-action">
         <div class="d-flex justify-content-between align-items-center">
            <div>
               <h6 class="mb-0">{place} - <span class="badge badge-secondary">{cleaner}</span> - {moment(cleanedAt).format('YYYY/MM/DD')}</h6>
            </div>
            <div class="input-group w-auto">
               <div class="input-group-prepend">
                  { note && <span class="input-group-text"><img width="15" src={iconNote} /></span> }
               </div>
               <div class="input-group-append">
                  <CommentCount commentsCount={ commentsCount }/>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default connect()(EventListItem)