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

const ModalContainer = props => {

    const [preferenceOption, setpreferenceOption] = useState(props.diet.preferences[0]);

    const optionSelectHandler = (value) => {
        setpreferenceOption(props.diet.preferences[value])

    }
    return (

        <Modal
            animationType={"slide"}
            onRequestClose={() => props.actionClick(0, props.diet.dietaryHeader)}
            transparent={true}
            visible={props.isModal}>

            <TouchableOpacity style={{ flex: 1, opacity: 0 }} onPressOut={props.actionClick} />
            <View style={styles.modal}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }} >

                    <View style={{ height: 250 }}>
                        <HeaderText>
                            {props.diet.dietaryHeader}
                        </HeaderText>
                        <HeaderText style={{ fontSize: 17, color: "#575758", paddingTop: 7, fontWeight: "normal" }}>
                            {props.diet.dietaryDescription}
                        </HeaderText>
                        <NoteComponent title={preferenceOption.subHeader} color={preferenceOption.color}>
                            {preferenceOption.subHeaderDescription}
                        </NoteComponent>
                    </View>

                    <CustomSlider selectState={optionSelectHandler}
                        color={preferenceOption.color}
                        initialValue={preferenceOption._id}
                        preferences={props.diet.preferences}
                    />

                    <View style={{ flex: 3, flexDirection: "row", justifyContent: "center" }}>
                        <CustomButton container_style={{ ...styles.buttonContainer, flex: 5, alignItems: "center", margin: 10 }}
                            buttonStyle={{ backgroundColor: preferenceOption.color }}
                            data-test="saveComp"
                            title="save choice"
                            color="#fff"
                            pressHandler={() => props.actionClick(preferenceOption._id, props.diet.dietaryHeader)} />
                        <CustomButton container_style={{ ...styles.buttonContainer, flex: 1, alignItems: "center" }}
                            buttonStyle={{ backgroundColor: preferenceOption.color, paddingHorizontal: 13, paddingVertical: 10, borderRadius: 40 }}
                            data-test="saveComp"
                            title="X"
                            color="#fff"
                            pressHandler={() => props.actionClick(0, props.diet.dietaryHeader)} />
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
        borderRightWidth: 15,
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
