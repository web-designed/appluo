import React from 'react'
import AddEventForm from './AddEventForm'

const AddEventPage = ({ history }) => {
   return(
      <div>
         <h1>Add a cleaning</h1>
         <AddEventForm history={history} />
      </div>
   )
}

export default AddEventPage