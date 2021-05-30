import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import {fontSize} from '../theme/fonts';
import {colors} from '../theme/themeColors';

const CustomButton = (props) => (
  <View style={props.container_style}>
    <TouchableOpacity
      style={[styles.saveStyle, props.buttonStyle]}
      onPress={props.pressHandler}
      data-test="touchableComp">
      <Text style={{ ...styles.text,color: props.color}} data-test="textData">{props.title}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.buttonText
  },
  saveStyle: {
    borderRadius: 40,
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: colors.primaryButton
  }
})

CustomButton.propTypes = {
  buttonStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  color: PropTypes.string,
  title: PropTypes.string,
  pressHandler: PropTypes.func
}


export default CustomButton;