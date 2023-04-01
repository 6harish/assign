import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import CouponCard from '../components/CouponCard';
import Componenteditcard from '../components/Componenteditcard';

const Coupons = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView style={{width: '90%', height: '100%'}}>
        <CouponCard />
        <Componenteditcard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddCoupon')}>
        <Text style={{color: '#fff'}}>Add Coupon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coupons;

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
});
