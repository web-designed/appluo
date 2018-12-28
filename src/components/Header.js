import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
   <header>
      <h1>Appluo</h1>
      <p>Für eine schöne ambiente in der WG: {
         //<strong>{this.state.wgName}</strong>
      }</p>
      <div>
         <NavLink to="/" exact={true}>Dashboard</NavLink> | <NavLink to="/add">Add Event</NavLink> | <NavLink to="/stats">Stats</NavLink>
      </div>
   </header>
)

export default Header