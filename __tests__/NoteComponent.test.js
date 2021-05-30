import React from 'react';
import {View, Text} from 'react-native';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NoteComponent from '../app/components/NoteComponent';
import {findByTestAttr} from '../app/utils/testFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data = {
    title:"Note Header",
}


describe('<NoteComponent/>', () => {

    it('should render without issues', () => {
        const component = shallow(<NoteComponent />);
        expect(component.length).toBe(1);
        expect(component).toMatchSnapshot();
      });

    it("Header Props and children test in NoteComponent", () =>
      {
          const wrapper = shallow(<NoteComponent {...dummy_data}>Headerrr Description</NoteComponent>)
          expect(wrapper.find(View)).toHaveLength(1)          
          expect(wrapper.find(Text)).toHaveLength(2)
          let headingComp = findByTestAttr(wrapper, "headingComp")
          expect(headingComp.length).toBe(1);

          expect(headingComp.props().children).toEqual("Note Header")
          let descComp  = findByTestAttr(wrapper, "descComp")
          expect(descComp.length).toBe(1);
          expect(descComp.props().children).toEqual("Headerrr Description")

      
     });

})