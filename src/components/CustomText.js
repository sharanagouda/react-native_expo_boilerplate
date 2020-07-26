import React from 'react';
import { Text } from 'react-native';
import * as utils from '../utils';

const CustomText = (props) => {
  const {
    text, fontStyle, style, numberOfLines
  } = props;
  let textFamily = { ...utils.Typography.FONT_REGULAR };
  switch (fontStyle) {
    case 'regular':
      textFamily = { ...textFamily, ...utils.Typography.FONT_REGULAR };
      break;
    case 'bold':
      textFamily = { ...textFamily, ...utils.Typography.FONT_BOLD };
      break;
    case 'light':
      textFamily = { ...textFamily, ...utils.Typography.FONT_LIGHT };
      break;
    case 'medium':
      textFamily = { ...textFamily, ...utils.Typography.FONT_MEDIUM };
      break;
    case 'semiBold':
      textFamily = { ...textFamily, ...utils.Typography.FONT_SEMI_BOLD };
      break;
    case 'extraBold':
      textFamily = { ...textFamily, ...utils.Typography.FONT_EXTRA_BOLD };
      break;
    default:
      break;
  }
  return (
    <Text style={[textFamily, style]} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default CustomText;
