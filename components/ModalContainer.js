import React from "react";
import {
    View,
    Modal,
    TouchableOpacity, StyleSheet,
    ScrollView
} from "react-native";
import HeaderText from './HeaderText';
import NoteComponent from './NoteComponent';
import CustomButton from './CustomButton';
// import Slider from 'react-native-custom-slider';
// import SnapSlider from '@elselabs/react-native-snap-slider';
import CustomSlider from './Slider/CustomSlider';

import {Dimensions} from 'react-native';
import {useOrientation} from './useOrientation'


const ModalContainer = props => {
    const orientation = useOrientation()
    const dim = Dimensions.get('screen');
    const dimA = Dimensions.get("window") 
    console.log(dim.height, dim.width, orientation)
    let height=dim.height<700?152:145;
    let buttonFlexSize=dim.height<700?5:3.7;
    let aspectRatio= orientation=="PORTRAIT"?dimA.height/dimA.width:((dimA.height/dimA.width)*3)
    return (
        
        <Modal
            animationType={"slide"}
            // transparent={false}
            onRequestClose={props.actionClick}
            transparent={true}
            visible={props.isModal}>
              
            <TouchableOpacity style={{ flex: 1, opacity: 0 }} onPressOut={props.actionClick} />
            <View style={styles.modal}>
            <ScrollView  contentContainerStyle={{flexGrow:1,paddingHorizontal:10}} >
                
                <View style={{height:height*aspectRatio}}>
                <HeaderText>
                    {props.modalHeader}
                </HeaderText>
                <HeaderText style={{ fontSize: 17, paddingVertical: 10 , fontWeight:"normal"}}>
                    {props.dietaryDescription}
                </HeaderText>
                <NoteComponent title={props.preferenceOption.subHeader}  color={props.preferenceOption.color}>
                    {props.preferenceOption.subHeaderDescription}
                </NoteComponent>
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
                <CustomSlider selectState={props.selectState} color={props.preferenceOption.color} initialValue={props.preferenceOption._id}/>

                <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "center" , alignItems:"flex-end", marginBottom:40}}>
                    <CustomButton container_style={{ ...styles.buttonContainer, flex: buttonFlexSize, alignItems: "center" }}
                        buttonStyle={{ backgroundColor:props.preferenceOption.color}}
                        data-test="saveComp"
                        title="save choice"
                        color="#fff"
                        pressHandler={props.actionClick} />
                    <CustomButton container_style={{ ...styles.buttonContainer, flex: 1, alignItems: "flex-start" }}
                        buttonStyle={{ backgroundColor:props.preferenceOption.color, paddingHorizontal: 13, paddingVertical: 10, borderRadius: 40 }}
                        data-test="saveComp"
                        title="X"
                        color="#fff"
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