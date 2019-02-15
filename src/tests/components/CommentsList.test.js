import React from 'react'
import { shallow } from 'enzyme'
import CommentsList from '../../components/CommentsList'
import comments from '../fixtures/comments'
import events from '../fixtures/events'

test('should render an empty list correctly', () => {
   const wrapper = shallow(<CommentsList currentEvent={events[0]} />)
   expect(wrapper).toMatchSnapshot()
})