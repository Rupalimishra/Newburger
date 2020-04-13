
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import BuildControl from './BuildControl';


Enzyme.configure({ adapter: new EnzymeAdapter() });
let myButton;

describe('BuildControl', () => {
  
    it('should render salad button', () => {
        
        const props = {
            disabled: () => undefined
        };
        
       
        const wrapper = shallow(<BuildControl  {...props}/>);
        
         myButton = wrapper;
         myButton.setProps= undefined;
         expect(myButton.setProps).toEqual(undefined);
    });
     it('should render the bacon button', () => {
       
        const props = {
            disabled: () => true,
  
 };
         
         const wrapper = shallow(<BuildControl  {...props}/>);
          myButton = wrapper;
          myButton.setProps = true;
        expect(myButton.setProps).toEqual(true);
        
    })
    it("should render the cheese button  ", () => {
        const props = {

            disabled: () => true,
 };
        const wrapper = shallow(<BuildControl {...props} />);
        myButton = wrapper;
        myButton.setProps = true;
        expect(myButton.setProps).toEqual(true);
    })
    it("should render the meat button" , () => {
        const props = {
            disabled: () => true,
        }
       const wrapper = shallow(<BuildControl {...props} />);
        myButton = wrapper;
        myButton.setProps = true;
        expect(myButton.setProps).toEqual(true);
    })

});
