
import moment from 'moment'

const getReactChartData = (startDate, endDate, events, nameFilter, allNames) => {

   if(!events) return null

   // find out what is the time scale (years, months, days) 
   // depending on the amount of days
   //--------------------------------------------------------

      const daysAmountInTheFilter = endDate.diff(startDate, 'days')
      let timeScale;
      let timeIndex;
      if(daysAmountInTheFilter > 7){
         timeScale = 'Weeks'
      } else if (daysAmountInTheFilter > 31) {
         timeScale = 'Months'
      } else if (daysAmountInTheFilter > 365){
         timeScale = 'Years'
      } else {
         timeScale = 'Days'
      }

   // names array from the filter
   // ['Alex', 'Kylu', 'Chris', 'Till']
   //--------------------------------------------------------

      const names = nameFilter === 'all' ? [...allNames] : [nameFilter]


   // names table for correct order later in the dates
   // {alex:0, kylu:0, chris:0, till:0}
   //--------------------------------------------------------

      let namesTable = {}
      names.forEach((name) => {
         namesTable[name.toLowerCase()] = 0
      })


   // the legend first element in the chartConfig array
   //--------------------------------------------------------

      const legend = [
         [
            timeScale,
            ...names
         ]
      ]

   // build the dates hashtable 
   //--------------------------------------------------------

      const startDateIndex = moment(startDate.valueOf())
      let datesHashTable = []

      for (let index = 1; index <= daysAmountInTheFilter + 7 ; index = index + 7) {   
         const currentDateIndex = index === 1 ? moment(startDate) : startDateIndex.add(7, 'days')
         const currentDateIndexFormated = currentDateIndex.format('YYYY-MM-DD')

         // if the current date is after the endDate lets use the endDate
         // else lets move (n) days forward - depending on the time interval scale
         if(currentDateIndex.isAfter(endDate)){
            datesHashTable = [
               ...datesHashTable,
               [ endDate.format('YYYY-MM-DD'), {...namesTable} ]
            ]
         } else {
            datesHashTable = [
               ...datesHashTable,
               [ currentDateIndexFormated, {...namesTable} ]
            ]
         }
      }
      // console.log(datesHashTable)
      
      
      let lastHashTableQueryIndex = 0
      events.forEach((event) => {
         const date = moment(event.cleanedAt)
         const eventsCleaner = event.cleaner.toLowerCase()

         for (let i = lastHashTableQueryIndex; i < datesHashTable.length - 1; i++) {
            const startHashDate = datesHashTable[i][0]
            const endHashDate = datesHashTable[i + 1][0]
            // console.log(date.format('YYYY-MM-DD'), startHashDate, endHashDate)
            // console.log(eventsDate, datesHashTable[lastHashTableQueryIndex][0], datesHashTable[lastHashTableQueryIndex + 1][0])
            if(date.isBetween(moment(startHashDate), moment(endHashDate))){
               datesHashTable[i][1][eventsCleaner]++ 
               lastHashTableQueryIndex = i
               break
            }
         }
      })


   // build the configData
   //--------------------------------------------------------
   
      let dataConfig = []
      datesHashTable.forEach( interval => {

         let eventArray = []
         Object.keys(interval[1]).map( cleaner => {
               eventArray = [
               ...eventArray,
               interval[1][cleaner]
            ]
         })

         dataConfig = [
            ...dataConfig,
            [interval[0], ...eventArray]
         ]

      })


   // add the legend to the config
   //--------------------------------------------------------

      dataConfig = [
         ...legend,
         ...dataConfig
      ]

   return dataConfig
}

export default getReactChartData