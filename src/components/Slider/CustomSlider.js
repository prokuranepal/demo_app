import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from './SliderContainer';;

const CustomSlider = props => {

  const maximumValue = props.preferences.length - 1;
  const length = props.preferences.length;
  const sliderRatio = maximumValue / (length - 1);

  const [state, setState] = useState({
    value: props.initialValue,
    adjustSign: 1
  });

  const choice = (v) => {
    const halfRatio = sliderRatio / 2;
    let i = 0;
    for (; ;) {
      if ((v < sliderRatio) || (v <= 0)) {
        if (v >= halfRatio) {
          i++;
        }
        break;
      }
      v = v - sliderRatio;
      i++;
    }
    let value = sliderRatio * i;

    //Move the slider
    value = value + (state.adjustSign * 0.000001);//enforce UI update
    let sign = 1;
    if (state.adjustSign > 0) {
      sign = -1
    } else {
      sign = 1
    }
    // console.log(value, v)
    setState({ ...state, value: value, adjustSign: sign })
    props.selectState(Math.round(value))
  }

  const styles = StyleSheet.create({
    itemWrapper: {
      marginLeft: 8,
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      flexDirection: 'row',
    },
    item: {
      color: props.color
    },
    sliderContainer: {
      marginTop: 20,
      height: 32,
      display: 'flex',
      justifyContent: 'center',
      borderLeftWidth: 15,
      borderRightWidth: 15,
      borderRadius: 16,
      borderColor: props.color,
    },
    track: {
      height: 32,
      backgroundColor: props.color,
      display: 'flex',
      justifyContent: 'center',
    },
    thumb: {
      width: 20,
      height: 20,
      backgroundColor: props.color,
      borderColor: 'white',
      borderWidth: 7,
      borderRadius: 10,
    }
  });

  return (
    <View style={{flex:1, justifyContent:"flex-end"}}>
      <View style={styles.sliderContainer}>

        <Slider
          color={props.color}
          value={state.value}
          minimumValue={0}
          maximumValue={maximumValue}
          onSlidingComplete={(value) => choice(value)}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#464F7A"
          maximumTrackTintColor="#464F7A"
          length={length}
        />

      </View>
      <View style={styles.itemWrapper}>
        {props.preferences.map((option) => {
          return <Text key={option._id}>{option.sliderText}</Text>
        })}
      </View>
    </View>
  )
}



export default CustomSlider;