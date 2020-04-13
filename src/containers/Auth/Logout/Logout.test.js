import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Logout from './Logout';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("<Logout />" , () => {
    let wrapper;
    test("render", () => {
        const wrapper = shallow(<Logout />);
        expect(wrapper.exists()).toBe(true);
    })
   
    
})
