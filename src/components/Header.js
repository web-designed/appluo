import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export const Header = ({ slogan }) => (
   <header class="pt-3 bg-dark">
      <div class="container text-white">
         <h1 class="h2 mb-0">Appluo</h1>
         <p>{slogan}</p>
      </div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
         <div class="container">
            <ul class="navbar-nav mb-0">
               <li class="nav-item"><NavLink class="nav-link" to="/" exact={true}>Dashboard</NavLink></li>
               <li class="nav-item"><NavLink class="nav-link" to="/add">Add Event</NavLink></li>
               <li class="nav-item"><NavLink class="nav-link" to="/stats">Stats</NavLink></li>
            </ul>
         </div>
      </nav>
   </header>
)

const mapStateToProps = (state) => ({
   slogan: state.settings.slogan
})

export default connect(mapStateToProps)(Header)