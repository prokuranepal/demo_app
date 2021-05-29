import React from "react";
import { Text, StyleSheet, View } from "react-native";
import {colors} from '../ThemeColors/themeColors';
const noteComponent = props => (
    <View  style={{...styles.noteView, borderLeftColor:props.color}} >
        <Text style={[styles.textHeading, props.style]} >
             {props.title}
         </Text>
        <Text style={[styles.textNormal, props.style]} >
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