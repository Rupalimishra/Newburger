import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Testing of <Spinner />  componenet', () => {
    test("render an spinner", () => {
        const wrapper = shallow(<Spinner />);
       expect(wrapper).toBeTruthy();
       expect(wrapper.find("Loding").length).toEqual(0);
    })
})