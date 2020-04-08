import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import BurgerIngredient from './BurgerIngredient';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Testing of <BurgerIngredient />  componenet', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<BurgerIngredient {...props } />))
    test("render bread bottom switch case", () => {
     expect(wrapper.instance())
    })
})
