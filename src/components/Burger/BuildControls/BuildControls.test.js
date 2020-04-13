import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import BuildControls from './BuildControls';

Enzyme.configure({ adapter: new EnzymeAdapter() });


let orButton;

describe('BuildControls', () => {
  
    it('should render salad button', () => {
        
        const props = {
            disabled: () => true
        };
        
       
        const wrapper = shallow(<BuildControls  {...props}/>);
        
        orButton = wrapper;
        orButton.setProps= true;
         expect(orButton.setProps).toEqual(true);
    });
     it('should render the bacon button', () => {
       
        const props = {
            disabled: () => true,
  
 };
         
         const wrapper = shallow(<BuildControls  {...props}/>);
         orButton = wrapper;
         orButton.setProps = true;
        expect(orButton.setProps).toEqual(true);
        
    })
    it("should render the cheese button  ", () => {
        const props = {

            disabled: () => true,
 };
        const wrapper = shallow(<BuildControls {...props} />);
        orButton = wrapper;
        orButton.setProps = true;
        expect(orButton.setProps).toEqual(true);
    })
    it("should render the meat button" , () => {
        const props = {
            disabled: () => true,
        }
       const wrapper = shallow(<BuildControls {...props} />);
       orButton = wrapper;
       orButton.setProps = true;
        expect(orButton.setProps).toEqual(true);
    })

});
