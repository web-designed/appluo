import React from 'react'
import { shallow } from 'enzyme'
import { EventListItem } from '../../components/EventListItem'
import events from '../fixtures/events'

test('should render EventListItem correctly', () => {
   const wrapper = shallow(<EventListItem {...events[0]} />)
   expect(wrapper).toMatchSnapshot()
})