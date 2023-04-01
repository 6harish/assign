import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Delete = () => {
  return <View style={styles.centeredView}></View>;
};

const CouponCard = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('CouponDetails')}>
        <Text style={styles.text3}>Flat50</Text>
        <Text style={styles.text4}>50% off on all orders</Text>
        <Text
          style={{
            color: 'red',
            backgroundColor: '#FF7250',
            width: '50%',
            borderRadius: 5,
            margin: 6,
            padding: 3,
          }}>
          Active till 10 Mar, 2021
        </Text>
        <View style={styles.dotted} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => navigation.navigate('EditCoupon')}>
          <Text style={styles.share}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.share}>Delete</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.modalText}>Delete Coupon</Text>
                <Pressable
                  style={styles.x}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
              </View>
              <Text style={styles.text3}>Are you sure?</Text>
              <Text style={styles.text4}>
                Once deleted, you cannot retrive it back.
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.keep}>No, Keep It</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.delete}>Yes, Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CouponCard;

const styles = StyleSheet.create({
  x: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 40,
    height: 40,
    alignItems: 'center',
    width: 40,
  },
  centeredView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keep: {color: '#000', opacity: 0.7, fontWeight: '600'},
  delete: {
    fontWeight: '600',
    color: '#fff',
  },
  button: {
    width: '45%',
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    width: '45%',
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B22222',
  },
  card: {
    height: '14%',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  dotted: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    margin: 10,
  },
  share: {
    color: 'green',
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  text3: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  text4: {
    paddingVertical: 5,
    fontWeight: '400',
    color: '#000',
  },
  modalView: {
    width: '100%',
    height: '130%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    padding: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    // justifyContent: 'center',
    // alignSelf: 'center',
    fontSize: 18,
  },
});
