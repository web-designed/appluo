import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navigation from './Navigation'

export const Header = ({ slogan, className }) => (
   <header class="pt-3 bg-secondary">
      <div class="container-fluid text-white">
         <h1 class="h2 mb-0">Appluo</h1>
         <p>{slogan}</p>
      </div>
      <Navigation />
   </header>
)

const mapStateToProps = (state) => ({
   slogan: state.settings.slogan
})

export default withRouter(connect(mapStateToProps)(Header))