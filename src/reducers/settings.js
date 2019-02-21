import moment from 'moment'

//*******************************************************
// SETTINGS REDUCER
//*******************************************************

   const settingsReducerDefaultState = {
      wgName: 'The Cleaning Team',
      slogan: 'Manage your cleaning plan',
      places: ['Kitchen', 'Bathroom', 'Saloon'],
      cleaners: ['John', 'Alex', 'Tom', 'Steve'],
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