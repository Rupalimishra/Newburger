import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Burger from './Burger';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("render the message", () => {
    test("render the message", () => {
        const wrapper = shallow(<Burger />);
        const transformedIngredients = {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        }
        expect(transformedIngredients).find('Please start adding ingredients').toHaveLength(1);
        // expect([salad, bacon, cheese, meat]).toHaveLength(4);
    })
})