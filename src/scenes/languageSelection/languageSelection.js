import React, { useState } from 'react';
import {
  View, StyleSheet, FlatList, Image, Button
} from 'react-native';
import * as utils from '../../utils';
import Images from '../../utils/images';
import Card from '../../components/Card';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';

const data = [
  { id: 1, name: 'English' },
  { id: 2, name: 'Hindi' },
  { id: 3, name: 'Bengali' },
  { id: 4, name: 'Marathi' },
  { id: 5, name: 'Gujarati' },
  { id: 6, name: 'Punjabi' },
  { id: 7, name: 'Tamil' },
  { id: 8, name: 'Telugu' },
  { id: 9, name: 'Malayalam' },
  { id: 10, name: 'Kannada' },
  { id: 11, name: 'Urdu' },
  { id: 12, name: 'Assamese' },
];

const LanguageSelection = ({ navigation }) => {
  const [languageData] = useState(data);
  const [selectedLanguages, setSelectedLanguage] = useState([]);

  const didSelectLanguage = (selectedItem) => {
    const selectedLanguagesData = selectedLanguages;
    const isItemSelected = selectedLanguagesData.filter((item) => item.id === selectedItem.id)
      .length > 0;
    if (isItemSelected) {
      const index = selectedLanguagesData.findIndex(
        (obj) => obj.id === selectedItem.id
      );
      selectedLanguagesData.splice(index, 1);
    } else {
      selectedLanguagesData.push(selectedItem);
    }
    setSelectedLanguage(selectedLanguagesData);
  };

  const renderCard = ({ item }) => {
    const isSelected = selectedLanguages.filter((obj) => obj.id === item.id).length > 0;
    const font = isSelected ? 'semiBold' : 'regular';
    return (
      <Card
        style={[
          styles.cardContainer,
          { backgroundColor: isSelected ? '#2e1e65' : '#190D33' },
        ]}
        imageStyle={[
          styles.cardImageView,
          { backgroundColor: isSelected ? '#03F87E' : '#130927' },
        ]}
        isSelected={isSelected}
        textStyle={[
          styles.cardTextStyle,
          { color: isSelected ? '#03F87E' : '#4F4665' },
        ]}
        textFont={font}
        item={item}
        didSelect={(value) => didSelectLanguage(value)}
      />
    );
  };

  const renderImage = () => (
    <View style={styles.imageView}>
      <Image style={styles.imageStyle} source={Images.intersectionImage} />
    </View>
  );
  const renderHeadingsText = () => (
    <View style={styles.textView}>
      <CustomText
        fontStyle="bold"
        text="Select you Language"
        style={styles.textSyle}
      />
      <CustomText
        fontStyle="light"
        text="You can modify selection any time later..."
        style={[
          styles.textSyle,
          {
            fontSize: utils.Scale.moderateScale(14),
            color: '#BEB4D6',
          },
        ]}
      />
    </View>
  );
  const renderProceedButton = () => (
    <View style={styles.buttonView}>
      <CustomButton
        icon
        text="PROCEED"
        fontStyle="semiBold"
        textStyle={styles.buttonStyle}
        onClick={() => {
          navigation.navigate('OnBoardingScreen');
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      {/* <ScrollView selectedLanguages={{ flex: 1 }}> */}
      <View style={styles.sub_containe}>
        {renderImage()}
        {renderHeadingsText()}
      </View>
      <View style={styles.flatListView}>
        <FlatList
          // scrollEnabled={false}
          data={languageData}
          renderItem={renderCard}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {selectedLanguages.length > 0 ? renderProceedButton() : null}
      {/* </ScrollView> */}
      <Button
        title="Proceed to next screen"
        onPress={() => navigation.navigate('OnBoardingScreen')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#100721',
  },
  sub_containe: {
    height: '45%',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: utils.Scale.moderateScale(44),
    width: utils.Scale.moderateScale(166),
    margin: utils.Scale.moderateScale(5),
    backgroundColor: '#190e34',
    borderRadius: utils.Scale.moderateScale(8),
    flexDirection: 'row',
    opacity: 1,
  },
  cardImageView: {
    justifyContent: 'center',
    borderRadius: utils.Scale.moderateScale(75),
    width: utils.Scale.moderateScale(26),
    height: utils.Scale.moderateScale(26),
    marginHorizontal: utils.Scale.moderateScale(20),
  },
  cardTextStyle: {
    flex: 1,
    fontSize: utils.Scale.moderateScale(14),
    justifyContent: 'center',
    opacity: 1,
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    borderRadius: utils.Scale.moderateScale(75),
    width: utils.Scale.moderateScale(176),
    height: utils.Scale.moderateScale(176),
  },
  textView: {
    margin: utils.Scale.moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSyle: {
    fontSize: utils.Scale.moderateScale(22),
    color: 'white',
    marginBottom: utils.Scale.moderateScale(10),
    opacity: 1,
  },
  flatListView: { flex: 1 },
  buttonView: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: utils.Scale.moderateScale(10),
  },
  buttonStyle: {
    color: '#FFFFFF',
    fontSize: utils.Scale.moderateScale(18),
  },
});
export default LanguageSelection;
