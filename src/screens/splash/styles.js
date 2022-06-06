import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;


const styles = StyleSheet.create({
    main_container:{
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
       alignContent:"center",
       flex:1
    },
    innerContainer:{backgroundColor:"skyblue",height:"100%",width:"100%", alignItems:"center",justifyContent:"center"},
    splashText:{
       color:"White", fontSize:30
    }
})

export default styles;