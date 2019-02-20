import moment from 'moment'

const categoriseEventsByDate = (events) => {      
   let data = {}
   let currentYear
   let currentMonth

   events.map( event => {
      
      const eventsYear = moment(event.cleanedAt).format('Y')
      const eventsMonth = moment(event.cleanedAt).format('MM')
      const isNextYear = eventsYear !== currentYear
      const isNextMonth = eventsMonth !== currentMonth

      if(isNextYear){
         currentYear = eventsYear
         data[eventsYear] = {}
      }

      if(isNextMonth){
         currentMonth = eventsMonth
         data[eventsYear][eventsMonth] = []
      }

      data[eventsYear][eventsMonth] = [
         ...data[eventsYear][eventsMonth],
         event
      ]
   })
   return data
}

export default categoriseEventsByDate