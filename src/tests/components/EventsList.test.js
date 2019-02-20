import React from 'react'
import { shallow } from 'enzyme'
import { EventsList } from '../../components/EventsList'
import events from '../fixtures/events'
import categoriseEventsByDate from '../../selectors/categoriseEventsByDate'

test('should render EventsList correctly', () => {
   const eventsCategorised = categoriseEventsByDate(events)
   const wrapper = shallow(<EventsList events={categoriseEventsByDate} />)
   expect(wrapper).toMatchSnapshot()
})

test('should render EventsList correctly if no events provided', () => {
   const wrapper = shallow(<EventsList events={[]} />)
   expect(wrapper).toMatchSnapshot()
})