import React from 'react';
import {View, Text} from 'react-native';
import {configure, shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CustomSlider from '../app/components/slider/CustomSlider';
import Slider from '../app/components/slider/SliderContainer';

import {findByTestAttr} from '../app/utils/testFunction';
// JestHook.mock('expo-font');
configure({adapter: new EnzymeAdapter})

const fn_call = jest.fn()
const dummy_data = {
    selectState: fn_call,
    preferences: [
        {
            _id: 0,
            sliderText: "slide at 0"
        }, {
            _id: 1,
            sliderText: "slide at 1"
        }
    ],
    color: "red",
    initialValue: 1
}

describe('<CustomSlider/>', () => {

    it('should render without issues', () => {
        const component = shallow(<CustomSlider {...dummy_data}/>);
        expect(component.length).toBe(1);
        expect(component).toMatchSnapshot();
    });

    it("Children test in CustomSlider", () => {
        const wrapper = shallow(<CustomSlider {...dummy_data}/>)
        expect(wrapper.find(View)).toHaveLength(3)
        expect(wrapper.find(Text)).toHaveLength(2)
        expect(wrapper.find(Slider)).toHaveLength(1)

    });

    it("Slider Component test in CustomSlider", () => {
        const wrapper = shallow(<CustomSlider {...dummy_data}/>)
        let sliderComp = findByTestAttr(wrapper, "sliderComp");
        expect(sliderComp).toHaveLength(1)
        expect(sliderComp.props().color).toEqual("red")
        expect(sliderComp.props().value).toEqual(1)
        sliderComp
            .props()
            .onSlidingComplete(0)
        wrapper.update()
        expect(fn_call).toHaveBeenCalledTimes(1)
        expect(fn_call).toHaveBeenCalledWith(0)
        sliderComp = findByTestAttr(wrapper, "sliderComp");
        expect(sliderComp.props().value).toEqual(0.000001)
        //   const wrapper2 = shallow(<CustomSlider {...{...dummy_data,
        // visible:true}}>Headerrr</ModalContainer>)   const modalComp2 =
        // findByTestAttr(wrapper2,"sliderComp");
        // expect(modalComp2.props().visible).toEqual(true)
    });
    it("Textr Component test in CustomSlider", () => {
        const wrapper = shallow(<CustomSlider {...dummy_data}/>)
        let textComp = findByTestAttr(wrapper, "textComp");
        expect(textComp).toHaveLength(2)
        expect(textComp.at(0).props().children).toEqual("slide at 0")
        expect(textComp.at(1).props().children).toEqual("slide at 1")


    });

})