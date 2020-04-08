import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Burger from './Burger';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("render the message", () => {
    test("render the message", () => {
        const wrapper = shallow(<Burger />);
        const stringContaining = "Please start adding ingredients!";
        expect(wrapper(stringContaining)).toBe(transformedIngredients);
    })

})