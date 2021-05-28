import React from "react";
import { Text, StyleSheet, View } from "react-native";

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
    marginVertical:20,
    borderLeftColor: "#464f7a",
    borderLeftWidth:10  ,
    backgroundColor:"#ebebec" 
    },

  textNormal: {
    fontSize:15, 
    color:"#575758", 
  },
  
  textHeading: {
    fontSize:18, 
    color:"#575758", 
    fontWeight:"bold"
  }
});

export default noteComponent;