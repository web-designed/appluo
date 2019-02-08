import React from 'react'
import { shallow } from 'enzyme'
import Appluo from '../../components/Appluo'

test('should render Appluo correctly', () => {
   const wrapper = shallow(<Appluo />)
   expect(wrapper).toMatchSnapshot()
})