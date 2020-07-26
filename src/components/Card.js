import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import CustomText from './CustomText';

const Card = (props) => {
  const {
    item, didSelect, style, imageStyle, textStyle, textFont
  } = props;
  return (
    <TouchableOpacity style={[style]} onPress={() => didSelect(item)}>
      <View style={[imageStyle]}>
        <Image source={item.path ? item.path : undefined} />
      </View>
      <CustomText fontStyle={textFont} text={item.name} style={[textStyle]} />
    </TouchableOpacity>
  );
};

export default Card;
