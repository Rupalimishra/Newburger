
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Testing of <Logo /> Image componenet', () => {
    test("render an image", () => {
        const wrapper = shallow(<Logo />);
       expect(wrapper.find("img").length).toEqual(1);
    })
})

