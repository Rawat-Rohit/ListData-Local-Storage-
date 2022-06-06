import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems:"center",justifyContent:"center"
  },
  anime_background: {
     height:"50%", opacity:0.8,},
  anime_Description: {
      backgroundColor:"black",height:"50%",
      width:'100%',
      alignItems:"center",
      justifyContent:"center"
  },
  anime_Inner_Description:{
backgroundColor:"black",width:"90%"
  },
  description_Text_Style:{
    textAlign:"center",
    fontSize:17,
    color:"white"    
  }
});

export default styles;
