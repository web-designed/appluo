import React from 'react'
import { ViewEventPage } from '../../components/ViewEventPage'
import { shallow } from 'enzyme'
import events from '../fixtures/events'
import settings from '../fixtures/settings'

let wrapper, removeEvent, history

beforeEach(() => {
   removeEvent = jest.fn()
   history = {
      push: jest.fn()
   }
   wrapper = shallow(
      <ViewEventPage
         notifications={settings.notifications.event} 
         removeEvent={removeEvent} 
         event={events[0]}
         history={history}
      />
   )
})

test('should render the ViewEventPage correctly if no event found', () => {
   const wrapperEmpty = shallow(<ViewEventPage  notifications={settings.notifications.event}  />)
   expect(wrapperEmpty).toMatchSnapshot()
})

test('should render the ViewEventPage correctly if event found', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should handle the handleRemoveEvent', () => {
   wrapper.find('button').at(0).simulate('click')
   expect(wrapper.state('eventDeletedNotification')).toBe(settings.notifications.event.afterDelete)
   setTimeout(() => {
      expect(removeEvent).toHaveBeenLastCalledWith(events[0].id)
      expect(history.push).toHaveBeenLastCalledWith('/')
   }, 2000);
})