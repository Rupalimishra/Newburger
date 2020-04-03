// import React from 'react';

// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';
Enzyme.configure({ adapter: new EnzymeAdapter() })
it('renders without crashing', () => {
 const wrapper = shallow(<App />);
 const appComponent = wrapper.find("[data-test='component-app']");
 expect(appComponent.length).toBe(1);
 
});