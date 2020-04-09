import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import OrderSummary from './OrderSummary';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe("render", () => {
    test("render the CANCLE button", () => {
        const wrapper = shallow (<OrderSummary />);
        const text = wrapper.find('CANCLE').text();
        expect(text).toEqual('CANCLE');
    })
    test('render the OrderSummary  CONTINUE button ', () => {
        const text = wrapper.find('CONTINUE').text();
        expect(text).toEqual('CONTINUE');
        
    })
})