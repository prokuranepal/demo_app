import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import {View, Modal, ScrollView} from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import HeaderText from '../app/components/HeaderText';
import CustomButton from '../app/components/CustomButton';
jest.mock("Dimensions")

import ModalContainer from '../app/components/ModalContainer';
import NoteComponent from '../app/components/NoteComponent';
import CustomSlider from '../app/components/slider/CustomSlider'
import {act} from 'react-dom/test-utils';
import {findByTestAttr} from '../app/utils/testFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const function_click=jest.fn()
const dummy_data = {
    actionClick:function_click,
    isModal:false,
    diet:{
        
        dietaryHeader:"Header dietary 1",
        dietaryDescription:"dietary Description 1",
        preferences:[
            {   _id:0,
                subHeader:"preferences 1",
                subHeaderDescription:"sub head description 1",
                color:"red"
            },
            {
                _id:1,
                subHeader:"preferences 2",
                subHeaderDescription:"sub head description 2",
                color:"blue"
            }]
    }
}



describe('<ModalContainer/>', () => {

    afterEach(() => {
        jest.clearAllMocks();
      });

    it('should render without issues', () => {
        const component = shallow(<ModalContainer {...dummy_data}/>);
        expect(component.length).toBe(1);
        expect(component).toMatchSnapshot();
      });

    it("all components test in ModalContainer", () =>
      {
          const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
          expect(wrapper.find(HeaderText)).toHaveLength(2)
          expect(wrapper.find(CustomButton)).toHaveLength(2)
          expect(wrapper.find(View)).toHaveLength(3)
          expect(wrapper.find(NoteComponent)).toHaveLength(1)
          expect(wrapper.find(CustomSlider)).toHaveLength(1)
          expect(wrapper.find(ScrollView)).toHaveLength(1)
          expect(wrapper.find(Modal)).toHaveLength(1)
     });
    it("Modal Component test in ModalContainer", () =>
      {
          const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
          const modalComp = findByTestAttr(wrapper,"modalComp");
          expect(modalComp).toHaveLength(1)
          expect(modalComp.props().visible).toEqual(false)
          modalComp.props().onRequestClose()
          wrapper.update()
          expect(function_click).toHaveBeenCalledTimes(1)
        //   const wrapper2 = shallow(<ModalContainer {...{...dummy_data, visible:true}}>Headerrr</ModalContainer>)
        //   const modalComp2 = findByTestAttr(wrapper2,"modalComp");
        //   expect(modalComp2.props().visible).toEqual(true)

      
     });

   
     it("Touchable Opacity test in ModalContainer", () =>
     {
         const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
         const touchableComp = findByTestAttr(wrapper,"touchableComp");
         expect(touchableComp).toHaveLength(1)
         touchableComp.props().onPressOut()
         wrapper.update()
         expect(function_click).toHaveBeenCalledTimes(1);
     
    });

    it("Header Component test in ModalContainer", () =>
    {
        const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
        const headerComp = findByTestAttr(wrapper,"headerComp");
        expect(headerComp).toHaveLength(1)
        expect(headerComp.props().children).toEqual("Header dietary 1")
   });

   it("Header Description Component test in ModalContainer", () =>
   {
       const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
       const descComp = findByTestAttr(wrapper,"descComp");
       expect(descComp).toHaveLength(1)
       expect(descComp.props().children).toEqual("dietary Description 1")
  });
  it("NoteComponent and sliderComp test in ModalContainer", () =>
  {
      const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
      let subHeaderDescComp = findByTestAttr(wrapper,"subHeaderDescComp");
      expect(subHeaderDescComp).toHaveLength(1)
      expect(subHeaderDescComp.props().title).toEqual("preferences 1")
      expect(subHeaderDescComp.props().children).toEqual("sub head description 1")
      let sliderComp = findByTestAttr(wrapper,"sliderComp");
      expect(sliderComp).toHaveLength(1)
      expect(subHeaderDescComp.props().color).toEqual("red")
      expect(sliderComp.props().initialValue).toEqual(0)
      expect(sliderComp.props().preferences).toEqual([
        {
            _id: 0,
            color: "red",        
            subHeader:"preferences 1",
            subHeaderDescription:"sub head description 1"
        },
        {
            _id: 1,
            color: "blue",        
            subHeader:"preferences 2",
            subHeaderDescription:"sub head description 2"
        }])
    //  const sliderComp2 = findByTestAttr(wrapper,"sliderComp");
     act(() => {sliderComp.props().selectState(1)})
     wrapper.update()
     subHeaderDescComp = findByTestAttr(wrapper,"subHeaderDescComp");
     sliderComp = findByTestAttr(wrapper,"sliderComp");
     expect(subHeaderDescComp.props().color).toEqual("blue")
     expect(sliderComp.props().initialValue).toEqual(1)
     expect(subHeaderDescComp.props().title).toEqual("preferences 2")
     expect(subHeaderDescComp.props().children).toEqual("sub head description 2")
 
});

it("Custom buttons for save and cancel test in ModalContainer", () =>
{
    const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
    const saveComp = findByTestAttr(wrapper,"saveComp");
    const cancelComp = findByTestAttr(wrapper,"cancelComp");
    expect(saveComp.props().title).toEqual("save choice")
    expect(cancelComp.props().title).toEqual("X")
    expect(saveComp).toHaveLength(1)
    saveComp.props().pressHandler()
    wrapper.update()
    expect(function_click).toHaveBeenCalledTimes(1);
    cancelComp.props().pressHandler()
    wrapper.update()
    expect(function_click).toHaveBeenCalledTimes(2);

});
// it("Orientation data test in ModalContainer", () =>
// {
//     const wrapper = shallow(<ModalContainer {...dummy_data}>Headerrr</ModalContainer>)
//     // const saveComp = findByTestAttr(wrapper,"saveComp");
//     const ratioComp = findByTestAttr(wrapper,"ratioComp");
//     // expect(saveComp.props().title).toEqual("save choice")
//     // expect(saveComp.props().title).toEqual("X")
//     let mock=jest.fn()
 
//     mock.mockReturnValue("PORTRAIT");
//     // const utils = jest.createMockFromModule('react-native/Libraries/Utilities/Dimensions').default;
//     // utils.get = jest.fn(secret => {return {height:620, width:360}});
//     mockOrientation();
//     // wrapper.instance().useOrientation = mock;
//     mockDimension()
    
//     wrapper.update()
//     expect(ratioComp.props().style).toEqual({height:152*(620/360)})


 
// });


})

   
// export const mockDimension = () => {

//     jest.resetModules();
//     jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
//       OS,
//       get: (val) => {
//         console.log("hello testt")  
//         return {height:620, width:360}},
//     }));
//   };

//   export const mockOrientation = () => {
//     jest.resetModules();
//     jest.doMock('../src/components/useOrientation', () => "PORTRAIT"
//     );
//   };