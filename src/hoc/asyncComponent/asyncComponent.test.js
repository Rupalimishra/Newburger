import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import asyncComponent from './asyncComponent';

Enzyme.configure({ adapter: new EnzymeAdapter() });
    describe('asyncComponent' , () => {
        let wrapper = shallow(<asyncComponent />);
        test("componenet is rendering", () => {
        expect(wrapper.instance().state.component).toEqual(null);
    
        })
        test('componentDidMount', () => {
    
            wrapper.instance().componentDidMount();
    
            expect(wrapper.state().cmp.default).toEqual(newFile);
    
        });
        test('renders all container', () => {
    
            let C = value
   
           expect(wrapper.C).toEqual(value);
   
       });
        // test('render', () => {
        //     const wrapper = shallow(<asyncComponent />);
        //     expect(wrapper.exists()).toBe(true);
        // })
        // test('component is rendering', () => {
        //     expect(wrapper.state().component).toEqual(null);
        // })
        // test("renders all container", () => {
        //      let C = value;
        //      expect(wrapper.C).toEqual(value);
        // })
    })
    