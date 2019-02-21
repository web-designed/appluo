import React from 'react'
import { iconComment } from '../assets/images'

const CommentCount = ({ commentsCount }) => {
   return (
      <span class="input-group-text">
         <img class="mr-1" width="20" src={iconComment}/> <span class="badge badge-primary badge-pill">{ commentsCount }</span>
      </span>
   )
}

export default CommentCount