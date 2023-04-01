import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

const CouponType = () => {
  const [value, setValue] = useState('first');
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 10,
      }}>
      <Text style={styles.text3}>CouponType</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Group onValueChange={setValue} value={value}>
            <RadioButton value="first" />
          </RadioButton.Group>
          <Text style={styles.text4}>Percent</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Group onValueChange={setValue} value={value}>
            <RadioButton value="second" />
          </RadioButton.Group>
          <Text style={styles.text4}>Flat Discount</Text>
        </View>
      </View>
      <View style={styles.hed}>
        <Text style={{color: '#000', textAlign: 'left'}}>Percentage</Text>
        <TextInput
          style={styles.textinput}
          placeholder="%"
          placeholderTextColor="#CCCCCC"
        />
      </View>
      <View style={styles.hed}>
        <Text style={{color: '#000', textAlign: 'left'}}>
          Minimum Order Value
        </Text>
        <TextInput
          style={styles.textinput}
          placeholder="₹"
          placeholderTextColor="#CCCCCC"
        />
      </View>
      <View style={styles.hed}>
        <Text style={{color: '#000', textAlign: 'left'}}>Maximum Discount</Text>
        <TextInput
          style={styles.textinput}
          placeholder="₹"
          placeholderTextColor="#CCCCCC"
        />
      </View>
      <View style={styles.hed}>
        <Text style={{color: '#000', textAlign: 'left'}}>Set Expire Date</Text>
        <TextInput
          style={styles.textinput}
          placeholder="DD-MM-YYYY"
          placeholderTextColor="#CCCCCC"
        />
      </View>
    </View>
  );
};

export default CouponType;

const styles = StyleSheet.create({
  textinput: {textAlign: 'right', color: '#000'},
  text: {
    color: '#000',
  },
  hed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    borderColor: '#001',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 5,
    color: '#000',
    borderRadius: 10,
    marginTop: 10,
  },
  text3: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    padding: 2,
  },
  text4: {
    fontSize: 18,
    // paddingVertical: 5,
    // fontWeight: '700',
    color: '#000',
  },
});
