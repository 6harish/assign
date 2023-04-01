import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CouponCard = () => {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
        url: 'https://facebook.github.io/react-native/',
        title: 'React Native',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('CouponDetails')}>
        <Text style={styles.text3}>MARCH20</Text>
        <Text style={styles.text4}>20% off on orders above 500 upto 120</Text>
        <Text
          style={{
            color: 'green',
            backgroundColor: 'lightgreen',
            width: '50%',
            borderRadius: 5,
            margin: 6,
            padding: 3,
          }}>
          Active till 10 Mar, 2021
        </Text>
        <View style={styles.dotted} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare}>
        <Text style={styles.share}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CouponCard;

const styles = StyleSheet.create({
  card: {
    height: '14%',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  dotted: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    margin: 10,
  },
  share: {
    color: 'green',
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  text3: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  text4: {
    paddingVertical: 5,
    // fontWeight: '700',
    color: '#000',
  },
});
