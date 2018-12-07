import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddEventPage from '../components/AddEventPage'
import EditEventPage from '../components/EditEventPage'
import ViewEventPage from '../components/ViewEventPage'
import Appluo from '../components/Appluo'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path="/" component={Appluo} exact={true} />
            <Route path="/add" component={AddEventPage} />
            <Route path="/edit/:id" component={EditEventPage} />
            <Route path="/view/:id" component={ViewEventPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
)

export default AppRouter