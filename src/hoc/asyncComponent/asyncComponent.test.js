import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import asyncComponent from './asyncComponent';

Enzyme.configure({ adapter: new EnzymeAdapter() });
    describe('asyncComponent' , () => {
        test('render', () => {
            const wrapper = shallow(<asyncComponent />);
            expect(wrapper.exists()).toBe(true);
        });
    })
    
    test('state testing', () => {
        const asyncComponent = (importComponent) => {
            const wrapper = shallow(<asyncComponent importComponent={() => {}} />);
            wrapper.find('null').simulate("change",{
                target: { value: 'null'}
            });
            expect(wrapper.find('null')).props().value.toEqual('null');
    })

        