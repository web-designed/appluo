import moment from 'moment'

//*******************************************************
// SETTINGS REDUCER
//*******************************************************

   const settingsReducerDefaultState = {
      wgName: 'Greifswalder',
      slogan: 'Manage your cleaning plan',
      places: ['Küche', 'Bad', 'Flur'],
      cleaners: ['Kylu', 'Alex', 'Till', 'Chris'],
      createdAt: moment('2018-12-01'),
      notifications: {
         event: {
            afterDelete: 'The cleaning was successfully removed',
            notFound: "The cleaning doesn't exist or has been removed"
         },
         comment: {
            validate: 'Please add your comment'
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