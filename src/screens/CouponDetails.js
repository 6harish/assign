import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Mar20 from '../components/coupondetails/Mar20';
import Quickstats from '../components/coupondetails/Quickstats';
import Display from '../components/coupondetails/Display';

const CouponDetails = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Mar20 />
      <Quickstats />
      <Display />
      <TouchableOpacity
        style={{
          position: 'absolute',
          borderWidth: 1,
          borderColor: 'green',
          padding: 12,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 10,
        }}>
        <Text style={{color: 'green'}}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CouponDetails;

const styles = StyleSheet.create({});
