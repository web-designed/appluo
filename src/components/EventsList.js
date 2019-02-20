import React from 'react'
import EventListItem from './EventListItem'
import Sorting from './Sorting'
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/getVisibleEvents'
import categoriseEventsByDate from '../selectors/categoriseEventsByDate'
import moment from 'moment'

export const EventsList = ({ events, eventss } ) => {

   if(Object.keys(events).length > 0){
      return (
         <div class="container-fluid pt-3 pb-3">
            <Sorting hideFilters={[]} />
            { Object.keys(events).map( keyYear => (
               <div key={keyYear} class="list-group">
                  { Object.keys(events[keyYear]).map( keyMonth => (
                     <div>
                        <div class="list-group-item list-group-item-secondary flex-column align-items-start">
                           {keyYear} / {keyMonth}
                        </div>
                        { events[keyYear][keyMonth].map( event => (
                           <EventListItem id={event.id} {...event} />
                        ))}
                     </div>
                  ))}
               </div>
            ))}
         </div>
      )
   } else {
      return (
         <div class="container-fluid pt-3 pb-3">
            <Sorting hideFilters={[]} />
            <h3>No Events provided</h3>
         </div>
      )
   }   
}

const mapStateToProps = ({ events, filters }) => {
   return {
      events: categoriseEventsByDate(getVisibleEvents(events, filters)),
   }
}

export default connect(mapStateToProps)(EventsList)