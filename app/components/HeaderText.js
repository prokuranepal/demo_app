import React from "react";
import { Text, StyleSheet } from "react-native";

import PropTypes from 'prop-types';

import {fontSize} from '../theme/fonts';
import {colors} from '../theme/themeColors'

const HeaderText = props => (
  <Text {...props} style={[styles.textHeading, props.style]} data-test="headerText">
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: fontSize.header,
    color: colors.textColor1,
    fontWeight: "bold"
  }
});

HeaderText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

export default HeaderText;