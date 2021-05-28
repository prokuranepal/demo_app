import React from "react";
import {     View,
    Modal,
    TouchableOpacity, StyleSheet} from "react-native";
import HeaderText from './HeaderText';
import NoteComponent from './NoteComponent';
import CustomButton from './CustomButton';
const ModalContainer = props => (
    <Modal
        animationType={"slide"}
        // transparent={false}
        onRequestClose={props.actionClick}
        transparent={true}
        visible={props.isModal}>
        <TouchableOpacity  style={{flex:1,opacity:0}} onPressOut={props.actionClick}/>          
        <View style ={styles.modal}>
            <HeaderText>
                {props.modalHeader}
            </HeaderText>
            <HeaderText style={{fontSize:17, color:"#5a638b", paddingTop:10}}>
                {props.dietaryDescription}
            </HeaderText>
            <NoteComponent title={props.optionHeader} color={props.themeColor}>
                {props.optionDescription}
            </NoteComponent>
            <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly"}}>
                <CustomButton container_style ={{...styles.buttonContainer, flex:3, alignItems:"flex-end", margin:10}} 
                    buttonStyle={{backgroundColor:props.themeColor}}
                    data-test="saveComp" 
                    title="save choice"  
                    color="#fff"
                    pressHandler={props.actionClick} />
            <CustomButton container_style ={{...styles.buttonContainer,flex:1, alignItems:"flex-start"}} 
                    buttonStyle={{backgroundColor:props.themeColor, paddingHorizontal:13,paddingVertical:10,borderRadius:40}}
                    data-test="saveComp" 
                    title="X"  
                    color="#fff"
                    pressHandler={props.actionClick} />
            </View>
        </View>
    </Modal>

);
const styles = StyleSheet.create({

    modal: {
        flex:2.8,
        paddingHorizontal:40,
        paddingTop:40,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        backgroundColor: '#f4f4fc',
   },

   buttonContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,

}, 

});

export default ModalContainer;
