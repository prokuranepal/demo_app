

import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import PropTypes from 'prop-types';

import CustomButton from './CustomButton';
import HeaderText from './HeaderText';

import {fontSize} from '../theme/fonts';
import {colors} from '../theme/themeColors';


const LandingComp = (props) => (
    <View style={{ ...styles.sectionContainer, backgroundColor: props.backgroundCol }}>
        <HeaderText style={{color: colors.textColor2}} data-test="headComp">
            Let's know your dietary preferences.
        </HeaderText>
        <HeaderText style={styles.description} data-test="descComp">
            Any ingredients you don't prefer or are allergic to?
        </HeaderText>
        {props.children}
        <CustomButton container_style={styles.buttonContainer}
            data-test="buttonComp"
            title="save diet"
            color={colors.buttonTextColor}
            pressHandler={() => props.setisModal(true)} />
    </View>
)


const styles = StyleSheet.create({

    description:{fontSize: fontSize.buttonText, paddingTop: 10},
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40,
    },

    sectionContainer: {
        flex: 1,
        marginTop: 64,
        paddingHorizontal: 48,
        backgroundColor: colors.section
    },

});

LandingComp.propTypes = {
    backgroundCol : PropTypes.string,
    children: PropTypes.any,
    setisModal: PropTypes.func
  }

export default LandingComp;