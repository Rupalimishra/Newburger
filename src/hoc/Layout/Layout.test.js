import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Layout } from './Layout';

configure({adapter: new Adapter()});

    it('should render <Layout /> when receiving ingredients', () => {
    //    wrapper.setProps({Layout: {height: 0}});
    //     expect(wrapper.find(Layout)).toHaveLength(1);
    }); 
