import { View, Text, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
const SplashScreen = ({navigation}) => {
  useEffect(() => {
 
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000);
  }, [])
  
  return (
   <SafeAreaView style={styles.main_container}>
    <View style={styles.innerContainer}>
     <Text style={styles.splashText}> 
       Splash
       </Text> 
    </View>
   </SafeAreaView>
  )
}

export default SplashScreen