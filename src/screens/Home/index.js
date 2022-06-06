import {
  View,
  Text,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import FormListCard from '../../components/FormListCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [dataList, setDataList] = useState([]);
  const [title, setTitle] = useState('');
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setSelectedImage('');
    setTitle('');
    setQty('');
  }, [dataList]);
  //everytime save button pressed, clear input fields

  const pickImmage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });
    if (result?.assets[0]?.base64) setSelectedImage(result?.assets[0]?.base64);
  };

  const saveCardDetails = () => {
    if (selectedImage === '' || title === '' || qty === 0)
      alert('Please fill all details!');
    else {
      setDataList([...dataList, {title, qty, selectedImage}]);
    }
  };

  const deleteCard = () => {
    if (dataList) {
      setDataList(dataList.slice(0, -1));
    } else {
      alert('list is empty!');
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('ListData', JSON.stringify(dataList));
      alert('Data saved Successfully!');
    } catch (e) {}
  };

  return (
    <KeyboardAvoidingView
      enabled={false}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.formView}>
            <View style={styles.innerFormView}>
              <View style={styles.inputFields}>
                <TouchableOpacity onPress={pickImmage} style={styles.imageView}>
                  {selectedImage == '' ? (
                    <Text style={styles.commonTextStyle}>Image</Text>
                  ) : (
                    <Image
                      style={{height: '100%', width: '100%', borderRadius: 10}}
                      source={{uri: `data:image/jpeg;base64,${selectedImage}`}}
                    />
                  )}
                </TouchableOpacity>
                <View style={styles.inputFieldsView}>
                  <View style={styles.commonInputStyle}>
                    <TextInput
                      value={title}
                      onChangeText={title => {
                        setTitle(title);
                      }}
                      style={styles.commonTextStyle}
                    />
                  </View>
                  <View style={styles.commonInputStyle}>
                    <TextInput
                      value={qty}
                      onChangeText={qty => {
                        setQty(qty);
                      }}
                      style={styles.commonTextStyle}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={saveCardDetails} style={styles.addCTA}>
                <Text style={styles.addCTAText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.saveCTA}>
              <Text style={styles.saveCTAText}>Save</Text>
            </TouchableOpacity>
            <View style={styles.innerFormView}>
              <View style={styles.inputFields}>
                <TouchableOpacity style={styles.imageView}>
                  <Text style={styles.commonTextStyle}>Image</Text>
                </TouchableOpacity>
                <View style={styles.inputFieldsView}>
                  <View style={styles.commonInputStyle}></View>
                  <View style={styles.commonInputStyle}></View>
                </View>
              </View>
              <TouchableOpacity onPress={deleteCard} style={styles.addCTA}>
                <Text style={styles.addCTAText}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.saveCTA} onPress={storeData}>
              <Text style={styles.saveCTAText}>Save</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recordListView}>
            <FlatList
              data={dataList}
              renderItem={FormListCard}
              style={{flex: 1}}
            />
          </View>
          <View style={styles.BottomCTAView}>
            <TouchableOpacity
              style={styles.bottomCTA}
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Text>Next!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
