import React from 'react'
import { shallow } from 'enzyme'
import { CommentAddForm } from '../../components/CommentAddForm'
import settings from '../fixtures/settings'

let wrapper, startAddComment, form, currentEventId, value

beforeEach(() => {
   currentEventId = '1'
   startAddComment = jest.fn()
   wrapper = shallow(<CommentAddForm currentEventId={currentEventId} startAddComment={startAddComment} notifications={settings.notifications.comment} />)
   form = wrapper.find('form')
   value = 'my new comment'
})

test('should render the CommentAddForm correctly', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should set the validation message if a not valid form submited', () => {
   form.simulate('submit', {
      preventDefault: () => {}
   })
   expect(wrapper.state('error')).toBe(settings.notifications.comment.validate)
})

test('should set commentBody state on onCommentBodyChange', () => {
   form.find('textarea').simulate('change', {
      target: { value }
   })
   expect(wrapper.state('commentBody')).toBe(value)
})

test('should handle handleSubmitComment', () => {
   form.find('textarea').simulate('change', {
      target: { value }
   })
   form.simulate('submit', {
      preventDefault: () => {}
   })
   const newComment = {
      commentBody: value,
      commenter: 'kylu'
   }
   expect(startAddComment).toHaveBeenLastCalledWith(currentEventId, newComment)
   expect(wrapper.state('error')).toBe('')
   expect(wrapper.state('commentBody')).toBe('')
})