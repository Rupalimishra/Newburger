import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import OrderSummary from './OrderSummary';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('OrderSummay', () => {
    it("should render the OrderSummary", () => {
        const ingredientSummary = Object.keys( this.props.ingredients )
        const wrapper = shallow(<OrderSummary  {...props}/>);
        expect(wrapper(ingredientSummary)).toBeGreaterThan(0);

        
    })
})

