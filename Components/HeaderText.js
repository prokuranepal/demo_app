import React from "react";
import { Text, StyleSheet } from "react-native";

const headerText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize:26, 
    color:"#575758", 
    fontWeight:"bold"
  }
});

export default headerText;