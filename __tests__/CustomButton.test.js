import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CustomButton from '../components/CustomButton';
import {findByTestAttr} from './testFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const dummy_data = {
    title:"Title Test",
    pressHandler:function_click
}


describe('<CustomButton />', () => {

    it('should render without issues', () => {
        const component = shallow(<CustomButton />);
        expect(component.length).toBe(1);
        expect(component).toMatchSnapshot();
      });

    it("Text Component and Title Prop test in TestInput", () =>
      {
          const wrapper = shallow(<CustomButton  {...dummy_data} />)
          let textData = findByTestAttr(wrapper, "textData")
          expect(textData.length).toBe(1);
          expect(textData.props().children).toEqual("Title Test")
      
     });
    it("Touch Component and Event test", () =>
     {
        const wrapper = shallow(<CustomButton  {...dummy_data} />)
        let touchableComp = findByTestAttr(wrapper, "touchableComp")
        expect(touchableComp).toHaveLength(1)
        touchableComp.props().onPress()
        wrapper.update()
        expect(function_click).toHaveBeenCalledTimes(1)
     })


})