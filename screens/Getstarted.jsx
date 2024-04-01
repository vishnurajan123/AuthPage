import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const screenWidth = Dimensions.get('window').width;

export default function Getstarted({navigation}) {
    const gettStart=()=>{
        AsyncStorage.setItem('first Load', JSON.stringify(true))
        navigation.navigate('Login')
    }    
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/image.png')}
        style={{ width: screenWidth, height: 550}} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Coffee so good, your taste buds will love it.</Text>
        <Text style={styles.caption}>The best grain, the finest roat, the powerful flavor</Text>
        <TouchableOpacity onPress={gettStart} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer:{
    flex:1,
    backgroundColor:"black"
  },
  heading:{
    color:"white",
    textAlign:"center"
    ,
    fontSize:48,
    marginHorizontal:30,
    fontWeight:"600"
  },
  caption:{
    color:"#A9A9A9",
    textAlign:"center",
    marginHorizontal:30,
    marginVertical:15,
    fontSize:18
  },
  button:{
    backgroundColor:"#E28707",
    marginHorizontal:50,
    height:60,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginTop:20
  },
  buttonText:{
    color:"white",
    fontSize:20,
    fontWeight:"600"
  }
});
