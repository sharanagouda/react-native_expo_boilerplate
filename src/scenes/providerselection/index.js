import React, { useState } from 'react';
import {
  View, StyleSheet, FlatList, Image
} from 'react-native';
import * as utils from '../../utils';
import Images from '../../utils/images';
import Card from '../../components/Card';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';

const data = [
  { id: 1, name: 'Netflix', path: Images.ALT },
  { id: 2, name: 'PrimeVideo', path: Images.PrimeVideo },
  { id: 3, name: 'HBO', path: Images.HBO },
  { id: 4, name: 'Discovery', path: Images.Discovery },
  { id: 5, name: 'Disney+ Hotstar', path: Images.Disney_Hotstar },
  { id: 6, name: 'ALT Balaji', path: Images.ALT },
  { id: 7, name: 'Zee5', path: Images.Zees },
  { id: 8, name: 'Eros Now', path: Images.Eros_Now },
  { id: 9, name: 'Voot', path: Images.Voot },
  { id: 10, name: 'Sony Liv', path: Images.Sony },
];
const ProviderSelection = ({ navigation }) => {
  const [providerData] = useState(data);
  const [selectedProviders, setSelectedProviders] = useState([]);

  const didSelectProvider = (selectedItem) => {
    const selectedProvidersData = selectedProviders;
    const isItemSelected = selectedProvidersData.filter((item) => item.id === selectedItem.id)
      .length > 0;
    if (isItemSelected) {
      const index = selectedProvidersData.findIndex(
        (obj) => obj.id === selectedItem.id
      );
      selectedProvidersData.splice(index, 1);
    } else {
      selectedProvidersData.push(selectedItem);
    }
    setSelectedProviders(selectedProvidersData);
  };
  const renderCard = ({ item }) => {
    const isSelected = selectedProviders.filter((obj) => obj.id === item.id).length > 0;
    const font = isSelected ? 'semiBold' : 'regular';
    return (
      <Card
        style={[
          styles.cardContainer,
          { backgroundColor: isSelected ? '#2e1e65' : '#190D33' },
        ]}
        imageStyle={[
          styles.cardImageView,
          { backgroundColor: isSelected ? '#000000' : '#000000' },
        ]}
        isSelected={isSelected}
        textStyle={[
          styles.cardTextStyle,
          { color: isSelected ? '#03F87E' : '#4F4665' },
        ]}
        textFont={font}
        item={item}
        didSelect={(value) => didSelectProvider(value)}
      />
    );
  };
  const renderHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: utils.Scale.moderateScale(30),
        padding: utils.Scale.moderateScale(30),
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CustomText fontStyle="medium" text="Providers" style={styles.textSyle} />
      <Image style={styles.closeIcon} source={Images.closeIcon} />
    </View>
  );

  const renderSeemorButton = () => (
    <View>
      <CustomButton
        buttonStyle={styles.seemoreButtonStyle}
        text="See More"
        fontStyle="semiBold"
        textStyle={[
          styles.buttonTextStyle,
          { color: '#B2A2CE', fontSize: utils.Scale.moderateScale(16) },
        ]}
        onClick={() => {
          navigation.navigate('RecommendationsLoadingScreen');
        }}
      />
    </View>
  );
  const renderProceedButton = () => (
    <View style={styles.proceedButtonView}>
      <CustomButton
        icon
        text="PROCEED"
        fontStyle="semiBold"
        textStyle={styles.buttonTextStyle}
        onClick={() => {
          navigation.navigate('RecommendationsLoadingScreen');
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.flatListView}>
        <FlatList
          // scrollEnabled={false}
          data={providerData}
          renderItem={renderCard}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
        {renderSeemorButton()}
      </View>
      {selectedProviders.length > 0 ? renderProceedButton() : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100721',
  },
  flatListView: { alignItems: 'center' },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: utils.Scale.moderateScale(60),
    width: utils.Scale.moderateScale(166),
    margin: utils.Scale.moderateScale(5),
    backgroundColor: '#190e34',
    borderRadius: utils.Scale.moderateScale(8),
    flexDirection: 'row',
    opacity: 1,
  },
  cardImageView: {
    justifyContent: 'center',
    width: utils.Scale.moderateScale(41),
    height: utils.Scale.moderateScale(32),
    marginHorizontal: utils.Scale.moderateScale(15),
  },
  cardTextStyle: {
    flex: 1,
    fontSize: utils.Scale.moderateScale(14),
    justifyContent: 'center',
    opacity: 1,
  },
  textSyle: {
    fontSize: utils.Scale.moderateScale(18),
    color: 'white',
    opacity: 1,
  },
  closeIcon: {
    alignSelf: 'center',
  },
  seemoreButtonStyle: {
    backgroundColor: '#100721',
    borderWidth: 1,
    borderColor: '#B2A2CEB3',
    height: utils.Scale.moderateScale(40),
    width: utils.Scale.moderateScale(166),
    marginTop: utils.Scale.moderateScale(26),
  },
  proceedButtonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: utils.Scale.moderateScale(30),
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: utils.Scale.moderateScale(18),
  },
});
export default ProviderSelection;
