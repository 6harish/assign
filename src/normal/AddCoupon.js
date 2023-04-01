import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CouponDetails from '../components/CouponDetails';
import CouponType from '../components/CouponType';
import {ScrollView} from 'react-native-gesture-handler';
import DisplayCoupon from '../components/DisplayCoupon';

const AddCoupon = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <CouponDetails />
        <CouponType />
        <DisplayCoupon />
      </ScrollView>
      <TouchableOpacity
        style={{
          // flex: 0.1,
          backgroundColor: '#098',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 30,
          height: 60,
          // bottom: 0,
        }}>
        <Text
          style={{
            alignSelf: 'flex-end',
            color: '#fff',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Add Coupon
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCoupon;

const styles = StyleSheet.create({});
