// import React from 'react';

// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { Logo } from './Logo';

// configure({adapter: new Adapter()});

//     it('should render <Logo />  with out any crashing', () => {
//         const wrapper = shallow(<App />);
//         const logoComponent = wrapper.find("[className='{classes.Logo} style={{height: props.height}}']");
//         expect(logoComponent.length).toBe(0);
       
//     });
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Testing of <Logo /> Image componenet', () => {
    test("render an image", () => {
        const wrapper = shallow(<Logo />);
       expect(wrapper).toBeTruthy();
       expect(wrapper.find("img").length).toEqual(1);
    })
})

