import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    // height:"100%",
    // width:"100%",
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    height: '100%',
    width: '90%',
  },
  formView: {
    width: '100%',
    height: '30%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: '20%',
  },
  innerFormView: {
    alignItems: 'center',
    width: '94%',
    height: '30%',
    margin: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputFields: {
    width: '90%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageView: {
    width: '20%',
    borderRightWidth: 2,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFieldsView: {
    height: '100%',
    width: '80%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonInputStyle: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    height: '65%',
    width: '40%',
  },
  commonTextStyle: {
    color: 'black',
    fontSize: 12,
  },
  addCTA: {
    height: screenWidth * 0.07,
    width: screenWidth * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  addCTAText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  recordListView: {
    width: '100%',
    minHeight: '15%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    alignItems:"center",
  },
  listScrolLView: {},
  saveCTA: {
    right: '10%',
    bottom: '5%',
    position: 'absolute',
    width: '18%',
    height: '15%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveCTAText: {color: 'black', fontWeight: 'bold', fontSize: 15},
  BottomCTAView:{
    position:"absolute", bottom: screenHeight*0.05, width:"100%",height:"10%",alignItems:"center",justifyContent:"center"
},
bottomCTA:{
  width:"50%",height:"100%",backgroundColor:"green", borderRadius:10, alignItems:"center",justifyContent:"center"
}
});

export default styles;
