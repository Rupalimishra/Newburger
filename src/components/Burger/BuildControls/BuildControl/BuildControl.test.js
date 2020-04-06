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

import BuildControl from './BuildControl';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = shallow(<BuildControl />);

// test('render the button', () => {
//     expect(wrapper.childAt(0).type()).toEqual('button');
//     expect(wrapper.childAt(2).type()).toEqual('button');
// });
// describe('If we are not add ingredients', () => {
//    expect(wrapper.find('button#addBtn')).toBeTruthy();
//    expect(wrapper.find('button#disable')).toBeTruthy(); 
// })
// test('less button is disable and more botton addd ingridients', () => {
//     // wrapper.setState({selectedTechnology: 'React'});
//     const addBtn = wrapper.find('button#addBtn').prop('disabled');
//     const uploadBtn = wrapper.find('button#uploadBtn').prop('able');
//     expect(addBtn).toBeTruthy();
//     expect(uploadBtn).toBeTruthy();
// });
// describe('<BuildControl /> less button is enable , more button is diable', () => {
//   te  st("render an image", () => {
//         const wrapper = shallow(<BuildControl />);
//        expect(wrapper).toBeTruthy();
      
//     })
// })




//  describe('BuildControl', () => {
//      test('should be defined', () => {
//          expect(BuildControl).toBeDefined();
//      });
//      const mockFunction = jest.fn();
// it('should call mockFunction on button click', () => {
//   const component = mount(
//     <MyComponent onClickFunction={mockFunction} />
//   );
//   component.find('button#ok-btn').simulate('click');
//   expect(mockFunction).toHaveBeenCalled();
  
//   component.unmount();
// });
    //  test('should render correctly', () => {
    //      const tree = shallow(
    //          <button  name='Less'/>
    //      );
    //      expect(tree).toMatchSnapshot();
    //  });
//  })

