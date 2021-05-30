import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {colors} from '../ThemeColors/themeColors';
const customButton = (props) => (
  <View style={props.container_style}>
    <TouchableOpacity
      style={[styles.saveStyle, props.buttonStyle]}
      onPress={props.pressHandler} data-test="touchableComp">
      <Text style={{ color: props.color, fontSize: 17 }} data-test="textData">{props.title}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  saveStyle: {
    borderRadius: 40,
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: colors.primaryButton
  }
})

export default customButton;