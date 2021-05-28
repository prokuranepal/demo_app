import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from 'react-native-custom-slider';

const CustomSlider = props => {

  const defaultValue = 0
  const maximumValue = 3;
  const length = 4
  const sliderRatio = maximumValue / (length - 1);
  const [state, setState] = useState({
    value: sliderRatio * defaultValue,
    adjustSign: 1
  });
  const sliderOptions = [
    { value: 0, label: 'Eat' },
    { value: 1, label: 'Don\'t Prefer' },
    { value: 2, label: 'Intolerant' },
    { value: 3, label: 'Severe{\n}Allergy' },
  ];

  const choice = (v) => {
    const halfRatio = sliderRatio / 2;
    // console.log(halfRatio);
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
    // console.log(value);
    setState({ ...state, value: value, adjustSign: sign })
    props.selectState(Math.round(value))
  }


  return (
    <View>
      <View style={styles.sliderContainer}>

        <Slider
          value={state.value}
          minimumValue={0}
          maximumValue={3}
          onSlidingComplete={(value) => choice(value)}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#464F7A"
          maximumTrackTintColor="#464F7A"
        />

      </View>
      <View style={styles.itemWrapper}>
        {/* {sliderOptions.map((option) => {
          <Text>{option.label}</Text>
        })} */}
        <Text style={styles.item}>Eat</Text>
        <Text style={styles.item}>Don't Prefer</Text>
        <Text style={styles.item}>Intolerant</Text>
        <Text style={styles.item}>Severe{"\n"}Allergy</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    marginLeft: 10,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  item: {
    color: '#464F7A'
  },
  sliderContainer: {
    marginTop: 20,
    borderLeftWidth: 10,
    borderRightWidth: 15,
    height: 40,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: '#464F7A',
    borderColor: '#464F7A',
  },
  track: {
    
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#464F7A',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
  }
});

export default CustomSlider;