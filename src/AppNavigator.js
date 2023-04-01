import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './normal/Splash';

import AddCoupons from './normal/AddCoupons';
import Coupons from './screens/Coupons';
import AddCoupon from './normal/AddCoupon';
import CouponDetails from './screens/CouponDetails';
import EditCoupon from './screens/EditCoupon';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Coupons"
          component={AddCoupons}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Coupon"
          component={Coupons}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AddCoupon"
          component={AddCoupon}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="CouponDetails"
          component={CouponDetails}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="EditCoupon"
          component={EditCoupon}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
