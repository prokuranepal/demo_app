import React, { useState } from "react";
import {
    Text,
    View,
    Modal,
    TouchableOpacity, StyleSheet
} from "react-native";
import HeaderText from './HeaderText';
import NoteComponent from './NoteComponent';
import CustomButton from './CustomButton';
import Slider from 'react-native-custom-slider';
import SnapSlider from '@elselabs/react-native-snap-slider'
const ModalContainer = props => {


    const defaultValue = 1
    const maximumValue = 1;
    const length = 4
    const sliderRatio = maximumValue / (length - 1);
    const [state, setState] = useState({
        value: sliderRatio * defaultValue,
        adjustSign: 1
    });
    var customStyle = StyleSheet.create({
        track: {
            // height: 30,
            // borderRadius: 15,
            // paddingRight: 5,
            // borderColor: '#464F7A',
            // borderWidth: 5,
            // borderLeftWidth: 40,
            // backgroundColor: 'white',
            // shadowColor: 'black',
            // shadowOffset: { width: 0, height: 1 },
            // shadowRadius: 1,
            // shadowOpacity: 0.15,
        },
        thumb: {
            width: 20,
            height: 20,
            backgroundColor: '#464F7A',
            borderColor: 'white',
            borderWidth: 5,
            borderRadius: 10,
            // shadowColor: 'black',
            // shadowOffset: { width: 0, height: 2 },
            // shadowRadius: 2,
            // shadowOpacity: 0.35,
            // marginRight: 10,
            // marginLeft: 10
        }
    });

    const choice = (v) => {

        // let newValue = 0
        // if (v > state.value) {
        //     newValue = Math.ceil(v);
        // } else if (v <= state.value) {
        //     newValue = Math.floor(v)
        // }
        // console.log(v, state.value, newValue)
        // setState({...state, value: newValue})
        const halfRatio = sliderRatio / 2;
        console.log(halfRatio);
        let i = 0;
        for (; ;) {
            if ((v < sliderRatio) || (v <= 0)) {
                if (v >= halfRatio) {
                    i++;
                }
                break;
            }
            v = v - sliderRatio;
            i++;
        }
        let value = sliderRatio * i;

        //Move the slider
        value = value + (state.adjustSign * 0.000001);//enforce UI update
        if (state.adjustSign > 0) {
            setState({ ...state, adjustSign: -1 });
        } else {
            setState({ ...state, adjustSign: 1 });
        }
        console.log(value);
        setState({ ...state, value: value })
    }

    const defaultItem = 2;

    const sliderOptions = [
        { value: 0, label: 'Eat' },
        { value: 1, label: 'Don\'t Prefer' },
        { value: 2, label: 'Intolerant' },
        { value: 3, label: 'Severe Allergy' },
    ]

    const slidingComplete = (e) => {
        console.log(e)
    }
    return (
        <Modal
            animationType={"slide"}
            // transparent={false}
            onRequestClose={props.actionClick}
            transparent={true}
            visible={props.isModal}>
            <TouchableOpacity style={{ flex: 1, opacity: 0 }} onPressOut={props.actionClick} />
            <View style={styles.modal}>
                <HeaderText>
                    {props.modalHeader}
                </HeaderText>
                <HeaderText style={{ fontSize: 17, color: "#5a638b", paddingTop: 10 }}>
                    {props.dietaryDescription}
                </HeaderText>
                <NoteComponent title={props.optionHeader}>
                    {props.optionDescription}
                </NoteComponent>
                <View style={styles.sliderContainer}>
               
                    <Slider
                        value={state.value}
                        minimumValue={0}
                        maximumValue={1}
                        // onValueChange={(value) => setValue(value)}
                        onSlidingComplete={(value) => choice(value)}
                        trackStyle={customStyle.track}
                        thumbStyle={customStyle.thumb}
                        minimumTrackTintColor="#464F7A"
                        maximumTrackTintColor="#464F7A"
                        />
                        
                </View>
                <View style={styles.itemWrapper}>
                            <Text>Eat</Text>
                            <Text>Don't Prefer</Text>
                            <Text>Intolerant</Text>
                            <Text>Severe {"\n"} Allergy</Text>
                        </View>
                {/* <SnapSlider containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                    itemWrapperStyle={styles.snapsliderItemWrapper}
                    itemStyle={styles.snapsliderItem}
                    items={sliderOptions}
                    labelPosition="bottom"
                    defaultItem={defaultItem}
                    onSlidingComplete={slidingComplete}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="#464F7A" /> */}

                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                    <CustomButton container_style={{ ...styles.buttonContainer, flex: 3, alignItems: "flex-end", margin: 10 }}
                        buttonStyle={{ backgroundColor: "#464f7a", fontSize: '20' }}
                        data-test="saveComp"
                        title="save"
                        color="#fff"
                        pressHandler={props.actionClick} />
                    <CustomButton container_style={{ ...styles.buttonContainer, flex: 1, alignItems: "flex-start" }}
                        buttonStyle={{ backgroundColor: "#464f7a", paddingHorizontal: 13, paddingVertical: 10, borderRadius: 40 }}
                        data-test="saveComp"
                        title="X"
                        color="#fff"
                        pressHandler={props.actionClick} />
                </View>
            </View>
        </Modal>

    )
};
const styles = StyleSheet.create({

    modal: {
        flex: 3.3,
        paddingHorizontal: 40,
        paddingTop: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#f4f4fc',
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,

    },
    snapsliderContainer: {

    },
    snapslider: {
        height: 20,
        backgroundColor: '#464F7A',
        // borderWidth: 5,
        // borderColor: '#464F7A',
        // borderRadius: 10,


    },
    snapsliderItemWrapper: {
        alignItems: 'center',
        // justifyContent: 'flex-end',

    },
    snapsliderItem: {
        fontSize: 12,

    },
    sliderContainer: {
        marginTop: 20,
        borderLeftWidth: 10,
        borderRightWidth: 20,
        height: 40,
        paddingBottom: 20,
        borderRadius: 20,
        backgroundColor: '#464F7A',
        borderColor: '#464F7A',

    },
    itemWrapper: {
        marginLeft: 10,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },

});

export default ModalContainer;
