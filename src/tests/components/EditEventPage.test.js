import React from 'react'
import { EditEventPage } from '../../components/EditEventPage'
import { shallow } from 'enzyme'
import events from '../fixtures/events'

let wrapper, history, editEvent

beforeEach(() => {
   editEvent = jest.fn()
   history = { push: jest.fn() }
   wrapper = shallow(<EditEventPage event={events[0]} history={history} editEvent={editEvent} />)
})

test('should render EditEventPage correctly if event doesnt exist', () => {
   const wrapperNoEvent = shallow(<EditEventPage />)
   expect(wrapperNoEvent).toMatchSnapshot()
})

test('should render EditEventPage correctly if event exist', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should handle the handleSubmit function', () => {
   wrapper.find('Connect(AddEventForm)').prop('handleSubmit')(events[0])
   expect(history.push).toHaveBeenLastCalledWith('/')
   expect(editEvent).toHaveBeenLastCalledWith(events[0].id, events[0])
})