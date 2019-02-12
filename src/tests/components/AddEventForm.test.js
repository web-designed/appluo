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

test('should set the state.cleaner on select option change', () => {
   const wrapper = shallow(<AddEventForm settings={settings} />)
   const value = 'kylu'
   wrapper.find('select').at(0).simulate('change', {
      target: { value }
   })
   expect(wrapper.state('cleaner')).toBe(value)
})

test('should set the state.place on select option change', () => {
   const wrapper = shallow(<AddEventForm settings={settings} />)
   const value = 'bad'
   wrapper.find('select').at(1).simulate('change', {
      target: { value }
   })
   expect(wrapper.state('place')).toBe(value)
})

test('should set the state.note on input change', () => {
   const wrapper = shallow(<AddEventForm settings={settings} />)
   const value = 'my new note'
   wrapper.find('textarea').at(0).simulate('change', {
      target: { value }
   })
   expect(wrapper.state('note')).toBe(value)
})

test('should call the handleOnSubmit prop for a valid form submission', () => {
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<AddEventForm handleSubmit={onSubmitSpy} settings={settings} {...events[0]} />)
   wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
   })
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
      cleanedAt: events[0].cleanedAt,
      createdAt: events[0].createdAt,
      cleaner: events[0].cleaner,
      place: events[0].place,
      note: events[0].note,
   })
})