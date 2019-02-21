import React from 'react'
import { Chart } from "react-google-charts";
import { connect } from 'react-redux'
import getVisibleEvents from '../selectors/getVisibleEvents'
import Sorting from './Sorting'
import getReactChartData from '../selectors/getReactChartData'
import { sortAsc } from '../actions/filters'

class StatsPage extends React.Component {

   componentDidMount(){
      this.props.dispatch(sortAsc())
   }
   
   render(){

      return (
         <div class="container-fluid pt-3">
            <Sorting hideFilters={['sort']} defaultDates="true" />
            <div class="card">
               <div class="card-body">
                  <div className={"chart-container"}>
                     {
                        <Chart
                           width={'100%'}
                           height={'400px'}
                           chartType="Bar"
                           loader={<div>Loading Chart</div>}
                           data={this.props.chartData}
                           options={{
                              // Material design options
                              chart: {
                                 title: this.props.filters.filterByPlace.toUpperCase()
                              },
                              animation: {
                                 startup: true,
                                 easing: 'linear',
                                 duration: 15,
                              },
                              isStacked: true
                           }}
                           // For tests
                           rootProps={{ 'data-testid': '2' }}
                        />
                     }
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = ({ events, filters, settings }) => ({
   chartData: getReactChartData(
      filters.startDate, 
      filters.endDate, 
      getVisibleEvents(events, filters),
      filters.filterByName, 
      settings.cleaners
   ),
   filters: filters,
   settings: settings
})

export default connect(mapStateToProps)(StatsPage)