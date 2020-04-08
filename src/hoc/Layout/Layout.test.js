import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Layout } from './Layout';

configure({adapter: new Adapter()});

  describe('<Layout />', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Layout />));
     
    test("should render a <div />", () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    test("render state", () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.instance().state.showSideDrawer).toEqual(false);
    })
    
})

