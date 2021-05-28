import React from 'react';
import { View, Button, TouchableOpacity, Text,StyleSheet } from 'react-native';
const customButton =(props)=>(
    <View style={props.container_style}>
        <TouchableOpacity
          style={[styles.saveStyle,props.buttonStyle]}
          onPress={ props.pressHandler }>
            <Text style={{color:props.color, fontSize:17}}> {props.title} </Text>
      </TouchableOpacity>
</View>
)

const styles = StyleSheet.create({
saveStyle:{
    borderRadius:40,
    paddingHorizontal:60,
    paddingVertical:10,
    backgroundColor:"#4fbed2"
  }
})

export default customButton;