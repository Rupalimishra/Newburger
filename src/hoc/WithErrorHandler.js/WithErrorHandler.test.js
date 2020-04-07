import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WithErrorHandler } from './WithErrorHandler';

configure({adapter: new Adapter()});

describe("render the componenetwillMount component", () => {
    test("render componentWillMount",() => {
        const withErrorHandler = shallow(< withErrorHandler/>);
        expect(wrapper).setState(null).componentWillMount.toEqual(null);
    } )
})