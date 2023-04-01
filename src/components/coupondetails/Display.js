import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const Display = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        flex: 0.4,
        width: '100%',
      }}>
      <Text style={styles.text3}>Display coupon to customers</Text>
      <Text style={styles.text}>
        Allow customers to see this coupon during checkout
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

export default Display;

const styles = StyleSheet.create({
  text: {color: '#000', opacity: 0.5},
  text3: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    paddingVertical: 20,
  },
});
