import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Mar20 = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        flex: 0.3,
        width: '100%',
      }}>
      <Text style={styles.text3}>MARCH20</Text>
      <Text style={styles.text}>Created 5 days ago by Eshwar Uppala</Text>
      <Text style={styles.text1}>Active till 31 Mar, 2021</Text>
      <Text style={styles.text4}>20% off on orders above 500 upto 120</Text>
      <Text style={styles.text4}>
        # Each customer can use this coupon 1 time
      </Text>
    </View>
  );
};

export default Mar20;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    opacity: 0.4,
    padding: 2,
  },
  text1: {
    backgroundColor: 'lightgreen',
    padding: 5,
    borderRadius: 5,
    width: '50%',
    color: 'green',
    fontWeight: '500',
  },
  text3: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  text4: {
    paddingVertical: 5,
    fontWeight: '700',
    color: '#000',
  },
});
