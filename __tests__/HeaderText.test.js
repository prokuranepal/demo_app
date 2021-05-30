import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import {Text} from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import HeaderText from '../src/components/HeaderText';
import {findByTestAttr} from '../src/utils/testFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data = {
    title:"Header",
}


describe('<HeaderText/>', () => {

    it('should render without issues', () => {
        const component = shallow(<HeaderText />);
        expect(component.length).toBe(1);
        expect(component).toMatchSnapshot();
      });

    it("Header Props test in HeaderText", () =>
      {
          const wrapper = shallow(<HeaderText>Headerrr</HeaderText>)
          expect(wrapper.find(Text)).toHaveLength(1)
          let textData = findByTestAttr(wrapper, "headerText")
          expect(textData.length).toBe(1);
          expect(textData.props().children).toEqual("Headerrr")
      
     });

})