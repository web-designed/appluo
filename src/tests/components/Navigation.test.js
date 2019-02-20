import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../../components/Navigation'

test('should render Navigation correctly', () => {
   const wrapper = shallow(<Navigation />)
   expect(wrapper).toMatchSnapshot()
})