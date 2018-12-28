import React from 'react'
import EventListItem from './EventListItem'
import Sorting from './Sorting'
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/getVisibleEvents'
import moment from 'moment'

const EventsList = ({ events } ) => {

   let currentMonth

   return (
      <div>
         <Sorting hideFilters={[]} />
         {
            events.map((event) => {
               
               const eventsMonth = moment(event.cleanedAt).format('MM')
               const isNextMonth = eventsMonth !== currentMonth
               isNextMonth && (currentMonth = eventsMonth)

               return (
                  <div>
                     {isNextMonth && <h3>{moment(event.cleanedAt).format('YYYY-MM')}</h3>}
                     <EventListItem id={event.id} {...event} />
                  </div>
               )
            })
         }
      </div>
   )
}

const mapStateToProps = ({ events, filters }) => {
   return {
      events: getVisibleEvents(events, filters)
   }
}

export default connect(mapStateToProps)(EventsList)