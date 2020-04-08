
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import BuildControl from './BuildControl';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = shallow(<BuildControl />);
describe("render" , () => {
    test("should render disable button ",() => {
        expect( wrapper.disabled()).toEqual(false);
    })
})

