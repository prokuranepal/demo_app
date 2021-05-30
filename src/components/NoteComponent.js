import React from "react";
import { Text, StyleSheet, View } from "react-native";
import {colors} from '../ThemeColors/themeColors';
const noteComponent = props => (
    <View  style={{...styles.noteView, borderLeftColor:props.color}} data-test="noteComp">
        <Text style={[styles.textHeading, props.style]} data-test="headingComp">
             {props.title}
         </Text>
        <Text style={[styles.textNormal, props.style]} data-test="descComp">
             {props.children}
         </Text>
  </View>
);

const styles = StyleSheet.create({
    noteView:{
    padding:10,
    paddingTop:12,
    marginTop:10,
    marginBottom:20,
    borderLeftColor: colors.defaultBorder,
    borderLeftWidth:10  ,
    backgroundColor: colors.note
    },

  textNormal: {
    fontSize:15, 
    color:colors.textColor1, 
  },
  
  textHeading: {
    fontSize:18, 
    color: colors.textColor1, 
    fontWeight:"bold"
  }
});

export default noteComponent;