import React from 'react'
import { shallow } from 'enzyme'
import CommentCount from '../../components/CommentCount'
import comments from '../fixtures/comments'

test('should render CommentsCount correctly', () => {
   const wrapper = shallow(<CommentCount commentsCount={comments.length} />)
   expect(wrapper).toMatchSnapshot()
})