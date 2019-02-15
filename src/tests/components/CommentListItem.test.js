import React from 'react'
import { shallow } from 'enzyme'
import CommentListItem from '../../components/CommentListItem'
import comments from '../fixtures/comments'

test('Should render CommentListItem correctly', () => {
   const wrapper = shallow(<CommentListItem />)
   expect(wrapper).toMatchSnapshot()
})