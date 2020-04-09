import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import BuildControls from './BuildControls';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe("render the add" , () => {
    test("should render disable button ",() => {
        expect( wrapper.added()).toEqual(true);
    })
    test("render order now button disable ", () => {
        const wrapper = shallow(<BuildControls />);
        expect(wrapper('button')).toHaveTextContent('ORDER NOW');
    })
})