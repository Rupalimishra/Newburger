
import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}, setup=null) => {
    return shallow(<App { ...props} />)
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}
test('renders without crashing', () => {
 const wrapper = setup();
 const appComponent = findByTestAttr(wrapper, 'component-app');
 expect(appComponent.length).toBe(1);
 
});