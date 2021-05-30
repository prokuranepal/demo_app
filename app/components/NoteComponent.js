import React from "react";
import { Text, StyleSheet, View } from "react-native";

import PropTypes from 'prop-types';

import {fontSize} from '../theme/fonts';
import {colors} from '../theme/themeColors';

const NoteComponent = props => (
    <View  style={{...styles.noteView, borderLeftColor:props.color}} data-test="noteComp" >
        <Text style={[styles.textHeading, props.style]} data-test="headingComp">
             {props.title}
         </Text>
        <Text style={[styles.textNormal, props.style]} data-test="descComp">
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
    fontSize:fontSize.noteDescription, 
    color:colors.textColor1, 
  },
  
  textHeading: {
    fontSize:fontSize.noteHeading, 
    color: colors.textColor1, 
    fontWeight:"bold"
  }
});

NoteComponent.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  color: PropTypes.string,
  title: PropTypes.string
}

export default NoteComponent;