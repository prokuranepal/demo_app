import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import {View,Text} from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import HeaderText from '../src/components/HeaderText';
import CustomButton from '../src/components/CustomButton';
import LandingComp from '../src/components/LandingComp';


import {findByTestAttr} from '../src/utils/testFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const function_click=jest.fn()
const dummy_data = {
    setisModal:function_click
}



describe('<LandingComp/>', () => {

    it('should render without issues', () => {
        const component = shallow(<LandingComp />);
        expect(component.length).toBe(1);
        expect(component).toMatchSnapshot();
      });

    it("Individual Components render test in LandingComp", () =>
      {
          const wrapper = shallow(<LandingComp>Headerrr</LandingComp>)
          expect(wrapper.find(View)).toHaveLength(1)
          expect(wrapper.find(HeaderText)).toHaveLength(2)
          expect(wrapper.find(CustomButton)).toHaveLength(1)
      
     });

     it("Props and event test in LandingComp", () =>
     {
         const wrapper = shallow(<LandingComp {...dummy_data}><Text data-test="childComp"/></LandingComp>)
         let childComp = findByTestAttr(wrapper, "childComp")
         expect(childComp.length).toBe(1);
         let headComp = findByTestAttr(wrapper, "headComp")
         expect(headComp.length).toBe(1);         
         expect(headComp.props().children).toEqual("Let's know your dietary preferences.")
        
         let descComp = findByTestAttr(wrapper, "descComp")
         expect(descComp.length).toBe(1);         
         expect(descComp.props().children).toEqual("Any ingredients you don't prefer or are allergic to?")
        
         let buttonComp = findByTestAttr(wrapper, "buttonComp")
         expect(buttonComp.props().title).toEqual("save diet")
         buttonComp.props().pressHandler()
         wrapper.update()
         expect(function_click).toHaveBeenCalledTimes(1)
         expect(function_click).toHaveBeenCalledWith(true)
     
    });


})