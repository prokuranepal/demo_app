

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
        <HeaderText style={{color: colors.textColor1}}>
            Let's know your dietary preferences.
        </HeaderText>
        <HeaderText style={{ fontSize: 17, color: colors.textColor2, paddingTop: 10 }}>
            Any ingredients you don't prefer or are allergic to?
        </HeaderText>
        {props.children}
        <CustomButton container_style={styles.buttonContainer}
            data-test="callComp"
            title="save diet"
            color="#fff"
            pressHandler={() => props.setisModal(true)} />
    </View>
)


const styles = StyleSheet.create({

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },

    sectionContainer: {
        flex: 1,
        marginTop: 64,
        paddingHorizontal: 48,
        backgroundColor: "#f3f3fb"
    },

});

export default LandingComp;