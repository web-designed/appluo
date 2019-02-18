import React from 'react'
import { shallow } from 'enzyme'
import { EventsList } from '../../components/EventsList'
import events from '../fixtures/events'

test('should render EventsList correctly', () => {
   const wrapper = shallow(<EventsList events={events} />)
   expect(wrapper).toMatchSnapshot()
})

test('should render EventsList correctly ifno events provided', () => {
   const wrapper = shallow(<EventsList events={[]} />)
   expect(wrapper).toMatchSnapshot()
})