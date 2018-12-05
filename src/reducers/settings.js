//*******************************************************
// SETTINGS REDUCER
//*******************************************************

   const settingsReducerDefaultState = {
      wgName: 'Greifswalder',
      places: ['Küche', 'Bad', 'Flur'],
      cleaners: ['Kylu', 'Alex', 'Till', 'Chris'],
   }
   const settingsReducer = (state = settingsReducerDefaultState, action) => {
      switch(action.type){
         default:
            return state
      }
   } 

   export default settingsReducer