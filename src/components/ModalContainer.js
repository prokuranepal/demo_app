import React, { useState } from "react";
import {
    View,
    Modal,
    TouchableOpacity, StyleSheet,
    ScrollView
} from "react-native";
import HeaderText from './HeaderText';
import NoteComponent from './NoteComponent';
import CustomButton from './CustomButton';
import CustomSlider from './Slider/CustomSlider';
import {Dimensions} from 'react-native';
import {useOrientation} from './useOrientation'
import {colors} from '../ThemeColors/themeColors';

const ModalContainer = props => {
    const [preferenceOption, setpreferenceOption] = useState(props.diet.preferences[0]);
    const orientation = useOrientation()
    const dim = Dimensions.get('screen');
    const dimA = Dimensions.get("window") 
    let height=dim.height<700?152:145;
    let buttonFlexSize=dim.height<700?5:3.7;
    let aspectRatio= orientation=="PORTRAIT"?dimA.height/dimA.width:((dimA.height/dimA.width)*3)
    const optionSelectHandler = (value) => {
        setpreferenceOption(props.diet.preferences[value])

    }
    return (

        <Modal
            animationType={"slide"}
            onRequestClose={() => props.actionClick(0, props.diet.dietaryHeader)}
            transparent={true}
            visible={props.isModal}
            data-test="modalComp"
            >

            <TouchableOpacity style={{ flex: 1, opacity: 0 }} onPressOut={() => props.actionClick(0, props.diet.dietaryHeader)} data-test="touchableComp"/>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }} >

                <View style={{height:height*aspectRatio}} data-test="ratioComp">               
                        <HeaderText data-test="headerComp">
                            {props.diet.dietaryHeader}
                        </HeaderText>
                        <HeaderText style={{ fontSize: 17, paddingVertical: 10, fontWeight: "normal" }} data-test="descComp" >
                            {props.diet.dietaryDescription}
                        </HeaderText>
                        <NoteComponent title={preferenceOption.subHeader} color={preferenceOption.color} data-test="subHeaderDescComp">
                            {preferenceOption.subHeaderDescription}
                        </NoteComponent>
                    </View>

                    <CustomSlider selectState={optionSelectHandler}
                        color={preferenceOption.color}
                        initialValue={preferenceOption._id}
                        preferences={props.diet.preferences}
                        data-test="sliderComp"
                    />
                    <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "center" , alignItems:"flex-end", marginBottom:40}}>
                        <CustomButton container_style={{ ...styles.buttonContainer, flex: buttonFlexSize, alignItems: "center" }}
                            buttonStyle={{ backgroundColor:preferenceOption.color}}
                            data-test="saveComp"
                            title="save choice"
                            color={colors.buttonTextColor}
                            pressHandler={props.actionClick} />
                        <CustomButton container_style={{ ...styles.buttonContainer, flex: 1, alignItems: "flex-start" }}
                            buttonStyle={{ backgroundColor:preferenceOption.color, paddingHorizontal: 13, paddingVertical: 10, borderRadius: 40 }}
                            data-test="saveComp"
                            title="X"
                            data-test="cancelComp"
                            color={colors.buttonTextColor}
                            pressHandler={props.actionClick} />
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({

    modal: {
        flex: 3,
        paddingHorizontal: 30,
        paddingTop: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#f4f4fc',
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',


    },
});

export default ModalContainer;