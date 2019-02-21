import React from 'react'
import { shallow } from 'enzyme'
import { Sorting } from '../../components/Sorting'
import settings from '../fixtures/settings'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let wrapper, setEndDate, setStartDate, filterByName, filterByPlace, handleSorting, sortAsc, sortDesc

beforeEach(() => {
   setEndDate = jest.fn()
   setStartDate = jest.fn()
   filterByName = jest.fn()
   filterByPlace = jest.fn()
   handleSorting = jest.fn()
   sortAsc = jest.fn()
   sortDesc = jest.fn()
   wrapper = shallow(
      <Sorting 
         setStartDate = { setStartDate }
         setEndDate = { setEndDate } 
         filterByName = { filterByName }
         filterByPlace = { filterByPlace }
         sortAsc = { sortAsc }
         sortDesc = { sortDesc }
         settings = { settings } 
         filters = { filters } 
         hideFilters = { [] } 
      />
   )
})

test('should render Sorting correctly with default filters', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should render Sorting correctly with altered filters', () => {
   wrapper.setProps({
      filters: altFilters
   })
   expect(wrapper).toMatchSnapshot()
})

test('should handle onDatesChange', () => {
   const startDate = moment(0).add(10, 'days')
   const endDate = moment(0).add(20, 'days')
   wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
   expect(setEndDate).toHaveBeenLastCalledWith(endDate)
   expect(setStartDate).toHaveBeenLastCalledWith(startDate)
})

test('should handle on focusChange', () => {
   const focusedInput = 'startDate'
   wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusedInput)
   expect(wrapper.state()).toEqual({ focusedInput })
})

test('should handle filterByPlace', () => {
   const value = 'bad'
   wrapper.find('select').at(1).simulate('change', {
      target: { value }
   })
   expect(filterByPlace).toHaveBeenLastCalledWith(value)
})

test('should handle filterByName', () => {
   const value = 'kylu'
   wrapper.find('select').at(2).simulate('change', {
      target: { value }
   })
   expect(filterByName).toHaveBeenLastCalledWith(value)
})

test('should handle the sortDesc', () => {
   const value = 'desc'
   wrapper.find('select').at(0).simulate('change', {
      target: { value }
   })
   expect(sortDesc).toHaveBeenCalledTimes(1)
})



