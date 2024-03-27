import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.home}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.button}>
           <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
<View style={styles.container}>
          <Text style={styles.homeText}>Welcome user</Text>
    
</View>   
 </View>
  )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:"black",
       
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    homeText:{
        color:"white",
        fontSize:20
    },
    button:{
        backgroundColor:"white",
        width:80,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginTop:20
    },
    buttonText:{
        color:"black",
        fontSize:14
    }
    
})