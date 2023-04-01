import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const DisplayCoupon = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        height: 150,
      }}>
      <Text style={styles.text3}>Display Coupon to Customers</Text>
      <Text style={styles.text4}>
        Allow customers to see this coupon during checkout?
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{alignSelf: 'flex-start'}}
      />
    </View>
  );
};

export default DisplayCoupon;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  text3: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  text4: {
    opacity: 0.5,
    color: '#000',
  },
});
