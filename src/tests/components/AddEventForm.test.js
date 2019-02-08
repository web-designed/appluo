import React from 'react'
import { AddEventForm } from '../../components/AddEventForm'
import { shallow } from 'enzyme'
import settings from '../fixtures/settings'
import events from '../fixtures/events'

test('should render the AddEventForm for the Add Event page correctly', () => {
   const wrapper = shallow(<AddEventForm settings={settings} />)
   expect(wrapper).toMatchSnapshot()
})

test('should render the AddEventForm for the Edit Event page correctly', () => {
   const wrapper = shallow(<AddEventForm settings={settings} {...events[0]} />)
   expect(wrapper).toMatchSnapshot()
})