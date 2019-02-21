import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
   return (
      <nav class="navbar navbar-expand-sm bg-dark">
         <ul class="nav nav-pills mb-0">
            <li class="nav-item"><NavLink activeClassName="active" className="text-white nav-link" to="/" exact={true}>Dashboard</NavLink></li>
            <li class="nav-item"><NavLink activeClassName="active" className="text-white nav-link" to="/add">Add Cleaning</NavLink></li>
            <li class="nav-item"><NavLink activeClassName="active" className="text-white nav-link" to="/stats">Chart</NavLink></li>
         </ul>
      </nav>
   )
}

export default Navigation