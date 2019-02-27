import React from 'react'
import { shallow } from 'enzyme'
import events from '../fixtures/events'
import { AddEventPage } from '../../components/AddEventPage'

let wrapper, startAddEvent, history

beforeEach(() => {
   startAddEvent = jest.fn()
   history = { push: jest.fn() }
   wrapper = shallow(<AddEventPage startAddEvent={startAddEvent} history={history} />)
})

test('should render the AddEventPage correctly', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
   wrapper.find('Connect(AddEventForm)').prop('handleSubmit')(events[1])
   expect(history.push).toHaveBeenLastCalledWith('/')
   expect(startAddEvent).toHaveBeenLastCalledWith(events[1])
})