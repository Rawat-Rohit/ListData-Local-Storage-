import { View, Text, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import Spider1 from '../../../../assets/images/spider1.png'
import Spider2 from '../../../../assets/images/spider2.png'
import Spider3 from '../../../../assets/images/spider3.png'

let Data = [{
    id: "1",
    value: "One",
    uri:Spider1
},
{
    id: "2",
    value: "Two",
    uri:Spider2
},
{
    id: "3",
    value: "Three",
    uri:Spider3
}]

const CharacterCarousel = () => {
  return (
    <View>
        <Text>{dsfdsf}</Text>
        <Image 
        source={Spider1}
        style={{flex:1}}
        />
    </View>
  )
}

export default CharacterCarousel