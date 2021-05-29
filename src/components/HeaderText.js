import React from "react";
import { Text, StyleSheet } from "react-native";
import {colors} from '../ThemeColors/themeColors'
const headerText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 26,
    color: colors.textColor1,
    fontWeight: "bold"
  }
});

export default headerText;