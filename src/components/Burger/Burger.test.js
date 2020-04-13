import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Burger from './Burger';
// import burger from './Burger';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("render" , () => {
    test("render the message", () => {
        let transformedIngredients;
        let burger;
        let result ;
         burger = (props) => {
            transformedIngredients = props.ingredients;
            if(transformedIngredients.length === 0) {
                result = "please adding ingredients";
            }
        let transformedIngredients;
        let result;
        if(transformedIngredients.length === 0)
           result  = "please add ingredients";
         }
        
        expect(result).toEqual("please adding ingredients");
    })
})