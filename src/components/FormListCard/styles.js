import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: screenHeight * 0.02,
    height: screenHeight * 0.08,
    width: screenWidth * 0.8,
    flexDirection: 'row',
  },
  innerContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },
  imageView: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  listDetailsContainer: {width: '100%'},
  listDetailsText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
});

export default styles;
