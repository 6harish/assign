import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Quickstats = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#fff',
        flex: 0.3,
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'baseline',
      }}>
      <Text style={styles.text3}>Quick Stats</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text style={styles.text4}>12</Text>
          <Text style={styles.text}>No. of times this</Text>
          <Text style={styles.text}>coupon was used</Text>
        </View>
        <View>
          <Text style={styles.text4}>$ 0</Text>
          <Text style={styles.text}>Sales generated</Text>
          <Text style={styles.text}>from this coupon</Text>
        </View>
      </View>
    </View>
  );
};

export default Quickstats;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    opacity: 0.5,
  },
  text3: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  text4: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: '700',
    color: '#000',
  },
});
