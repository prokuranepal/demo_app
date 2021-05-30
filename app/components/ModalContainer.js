import React, { useState } from "react";
import {
    View,
    Modal,
    TouchableOpacity, StyleSheet,
    ScrollView,
    Dimensions
} from "react-native";

import PropTypes from 'prop-types';

import CustomButton from './CustomButton';
import HeaderText from './HeaderText';
import NoteComponent from './NoteComponent';
import CustomSlider from './slider/CustomSlider';
import { useOrientation } from './useOrientation'

import {fontSize} from '../theme/fonts';
import { colors } from '../theme/themeColors';


const ModalContainer = props => {
    const [preferenceOption, setpreferenceOption] = useState(props.diet.preferences[0]);
    
    const orientation = useOrientation();
    const dim = Dimensions.get('screen');
    const dimA = Dimensions.get("window");
    // console.log(dim.height, dim.width, orientation)
    let height = dim.height < 700 ? 152 : 145;
    let buttonFlexSize = dim.height < 700 ? 5 : 3.7;
    let aspectRatio = orientation == "PORTRAIT" ? dimA.height / dimA.width : ((dimA.height / dimA.width) * 3);
    
    const optionSelectHandler = (value) => {
        setpreferenceOption(props.diet.preferences[value]);

    }
    return (

        <Modal
            animationType={"slide"}
            onRequestClose={() => props.actionClick(0, props.diet.dietaryHeader)}
            transparent={true}
            visible={props.isModal}
            data-test="modalComp"
            >

            <TouchableOpacity style={styles.touchable} onPressOut={() => props.actionClick(0, props.diet.dietaryHeader)} data-test="touchableComp"/>
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={styles.scrollView} >

                    <View style={{ height: height * aspectRatio }} data-test="ratioComp">
                        <HeaderText data-test="headerComp">
                            {props.diet.dietaryHeader}
                        </HeaderText>
                        <HeaderText style={styles.description} data-test="descComp">
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

                    <View style={styles.buttonConView}>
                        <CustomButton container_style={{ ...styles.buttonContainer, flex: buttonFlexSize, alignItems: "center" }}
                            buttonStyle={{ backgroundColor: preferenceOption.color }}
                            data-test="saveComp"
                            title="save choice"
                            color={colors.buttonTextColor}
                            pressHandler={() => props.actionClick(preferenceOption._id, props.diet.dietaryHeader)} />
                        <CustomButton container_style={{ ...styles.buttonContainer, flex: 1, alignItems: "flex-start" }}
                            buttonStyle={{ ...styles.buttonCancel, backgroundColor: preferenceOption.color }}
                            data-test="saveComp"
                            title="X"
                            data-test="cancelComp"
                            color={colors.buttonTextColor}
                            pressHandler={() => props.actionClick(0, props.diet.dietaryHeader)} />
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({

    buttonCancel: { paddingHorizontal: 17, paddingVertical: 10, borderRadius: 40 },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonConView: { flex: 0.5, flexDirection: "row", justifyContent: "center", alignItems: "flex-end", marginBottom: 40 },
    description: { fontSize: fontSize.description, paddingVertical: 10, fontWeight: "normal" },
    modal: {
        flex: 3,
        paddingHorizontal: 30,
        paddingTop: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#f4f4fc',
    },
    scrollView: { flexGrow: 1, paddingHorizontal: 10 },
    touchable: { flex: 1, opacity: 0 },
});

ModalContainer.propTypes = {
    diet: PropTypes.object,
    isModal: PropTypes.bool,
    actionClick: PropTypes.func
}

export default ModalContainer;