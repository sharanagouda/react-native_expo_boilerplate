import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import CustomText from './CustomText';
import ImagePath from '../utils/images';
import * as utils from '../utils';

function CustomButton(props) {
  const {
    icon, text, fontStyle, textStyle, buttonStyle, onClick
  } = props;
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button_cantainer, buttonStyle]}>
      <CustomText text={text} fontStyle={fontStyle} style={textStyle} />
      {icon ? (
        <View style={styles.iconStyle}>
          <Image source={ImagePath.forwordArrowIcon} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button_cantainer: {
    borderRadius: utils.Scale.moderateScale(28),
    backgroundColor: '#FF4275',
    height: utils.Scale.moderateScale(55),
    width: utils.Scale.moderateScale(236),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 1,
  },
  iconStyle: {
    marginHorizontal: utils.Scale.moderateScale(10),
  },
});
export default CustomButton;
