import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const FormListCard = ({item, index}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.imageView}
          source={{uri: `data:image/jpeg;base64,${item?.selectedImage}`}}
        />
      </View>
      <View style={styles.listDetailsContainer}>
        <Text style={styles.listDetailsText}>{item?.title}</Text>
        <View style={{marginVertical: '1%'}} />
        <Text style={styles.listDetailsText}>{item?.qty}</Text>
      </View>
    </View>
  );
};

export default FormListCard;
