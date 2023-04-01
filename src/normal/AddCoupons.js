import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AddCoupons = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.text}>Give discounts to your customer</Text>
      <Text style={styles.text}>Keep your customer loyal by providing</Text>
      <Text style={styles.text}>coupons to all or selected customer</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Coupon')}>
        <Text style={{color: '#fff'}}>Add Coupon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCoupons;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    height: 50,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#098',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
