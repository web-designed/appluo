import React from 'react'
import EventListItem from './EventListItem'
import Sorting from './Sorting'
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/getVisibleEvents'
import moment from 'moment'

export const EventsList = ({ events } ) => {

   if(events.length > 0){
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
                     <div key={event.id}>
                        {isNextMonth && <h3>{moment(event.cleanedAt).format('YYYY-MM')}</h3>}
                        <EventListItem id={event.id} {...event} />
                     </div>
                  )
               })
            }
         </div>
      )
   } else {
      return (
         <div>
            <h3>No Events provided</h3>
         </div>
      )
   }

   
}

const mapStateToProps = ({ events, filters }) => {
   return {
      events: getVisibleEvents(events, filters)
   }
}

export default connect(mapStateToProps)(EventsList)