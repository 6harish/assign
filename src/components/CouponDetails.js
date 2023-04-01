import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CouponDetails = () => {
  return (
    <View
      style={{
        // flex: 0.3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <Text style={styles.text3}>Coupon Details</Text>
      <TextInput
        placeholder="Coupon Code"
        placeholderTextColor={'#000'}
        style={styles.textinput}
      />
      <TextInput
        placeholder="Users Per Customer"
        placeholderTextColor={'#000'}
        style={styles.textinput}
      />
      <Text style={styles.text4}>
        Number of times a customer can use this coupon on your shop
      </Text>
    </View>
  );
};

export default CouponDetails;

const styles = StyleSheet.create({
  textinput: {
    height: 45,
    borderColor: '#001',
    borderWidth: 1,
    width: '100%',
    padding: 5,
    color: '#000',
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: '#000',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  text3: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  text4: {
    opacity: 0.5,
    color: '#000',
  },
});
