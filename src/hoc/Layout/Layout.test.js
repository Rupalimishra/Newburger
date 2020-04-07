import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Layout } from './Layout';

configure({adapter: new Adapter()});

describe('<Layout />', () => {
    test("render state", () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.state().showSideDrawer).toEqual(false);
    })
    test("render sideDrawerClosedHandle", () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper).setState(false).showSideDrawer.toEqual(false);
    })
})
