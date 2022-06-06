import {View, Text, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
const {height, width} = Dimensions.get('screen');
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormListCard from '../../components/FormListCard';

const Details = () => {
  const [dataList, setDatalist] = useState([]);
  useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    console.log("getData:")
    try {
      const value = await AsyncStorage.getItem('ListData');
      if (value !== null) {
        setDatalist(JSON.parse(value));
        // console.log("mounted details:",JOSN.parse(value).length);
        // value previously stored
      }
    } catch (e) {
      console.log("catched:",e)
      // error reading value
    }
  };
  return (
    <View style={styles.main_container}>
      {dataList.length > 0 ? (
        <FlatList data={dataList} renderItem={FormListCard} style={{flex: 1}} />
      ) : (
        <Text style={{color:"black", fontSize:20}}>No Data</Text>
      )}
    </View>
  );
};

export default Details;
