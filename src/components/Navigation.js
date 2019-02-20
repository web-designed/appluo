import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
   return (
      <nav class="navbar navbar-expand-sm bg-dark">
         <ul class="nav nav-pills mb-0">
            <li class="nav-item"><NavLink activeClassName="active" className="nav-link" to="/" exact={true}>Dashboard</NavLink></li>
            <li class="nav-item"><NavLink activeClassName="active" className="nav-link" to="/add">Add Event</NavLink></li>
            <li class="nav-item"><NavLink activeClassName="active" className="nav-link" to="/stats">Stats</NavLink></li>
         </ul>
      </nav>
   )
}

export default Navigation