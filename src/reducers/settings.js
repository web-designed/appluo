import moment from 'moment'

//*******************************************************
// SETTINGS REDUCER
//*******************************************************

   const settingsReducerDefaultState = {
      wgName: 'Greifswalder',
      places: ['Küche', 'Bad', 'Flur'],
      cleaners: ['Kylu', 'Alex', 'Till', 'Chris'],
      createdAt: moment('2018-12-01'),
      notifications: {
         event: {
            afterDelete: 'The cleaning was successfully removed',
            notFound: "The cleaning doesn't exist or has been removed"
         }
      }
   }
   const settingsReducer = (state = settingsReducerDefaultState, action) => {
      switch(action.type){
         default:
            return state
      }
   } 

   export default settingsReducer