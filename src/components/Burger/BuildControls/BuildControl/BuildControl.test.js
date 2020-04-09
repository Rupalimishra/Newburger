
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import BuildControl from './BuildControl';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("render" , () => {
    test("should render disable button ",() => {
        expect( wrapper.disabled()).toEqual(false);
    })
    test("render the less button", () => {
    const wrapper = shallow (<BuildControl />);
    const disabledBtn = wrapper.find('button.Less');
    disabledBtn.simulate('click');
    const text = wrapper.find('disable').text();
    expect(text).toEqual('disable');
    })
      test("render the more button" , () => {
         const wrapper = shallow(<BuildControl />);
          const addedBtn = wrapper.find('button.More');
          addedBtn.simulate('click');
          const text = wrapper.find('added').text();
          expect(text).toEqual('added');
          
      })
})

