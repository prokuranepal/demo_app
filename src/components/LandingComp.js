

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import CustomButton from './CustomButton';
import HeaderText from './HeaderText';
import {colors} from '../ThemeColors/themeColors';

const LandingComp = (props) => (
    <View style={{ ...styles.sectionContainer, backgroundColor: props.backgroundCol }}>
        <HeaderText style={{color: colors.textColor2}} data-test="headComp">
            Let's know your dietary preferences.
        </HeaderText>
        <HeaderText style={{ fontSize: 17, paddingTop: 10 }} data-test="descComp">
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
        backgroundColor: "#f3f3fb"
    },

});

export default LandingComp;