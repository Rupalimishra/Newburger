import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import button from '../../components/UI/Button/Button';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
    });

    test('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
    test('should render two <BuildControls /> element if authicated', () => {
       wrapper = shallow(<BurgerBuilder purchaseHandler />);
       wrapper.setProps({ purchasing: true });
       expect(wrapper.find(button).toHaveLength(2));
    })
});