import React from 'react'
import { shallow } from 'enzyme'
import events from '../fixtures/events'
import { AddEventPage } from '../../components/AddEventPage'

let wrapper, addEvent, history

beforeEach(() => {
   addEvent = jest.fn()
   history = { push: jest.fn() }
   wrapper = shallow(<AddEventPage addEvent={addEvent} history={history} />)
})

test('should render the AddEventPage correctly', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
   wrapper.find('Connect(AddEventForm)').prop('handleSubmit')(events[1])
   expect(history.push).toHaveBeenLastCalledWith('/')
   expect(addEvent).toHaveBeenLastCalledWith(events[1])
})