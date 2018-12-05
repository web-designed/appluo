import React from 'react'
import EventListItem from './EventListItem'
import Sorting from './Sorting'
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/getVisibleEvents'

const EventsList = ({ events } ) => (
   <div>
      <Sorting />
      {
         events.map((event) => (
            <EventListItem id={event.id} {...event} />
         ))
      }
   </div>
)

const mapStateToProps = ({ events, filters }) => {
   return {
      events: getVisibleEvents(events, filters)
   }
}

export default connect(mapStateToProps)(EventsList)