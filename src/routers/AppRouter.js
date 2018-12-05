import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddEvent from '../components/AddEvent'
import ViewEvent from '../components/ViewEvent'
import Appluo from '../components/Appluo'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path="/" component={Appluo} exact={true} />
            <Route path="/add" component={AddEvent} />
            <Route path="/edit/:id" component={AddEvent} />
            <Route path="/view/:id" component={ViewEvent} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
)

export default AppRouter