import { StyleSheet, Text, TextInput, View, TouchableOpacity,SafeAreaView, Alert,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loginAPI } from '../service/allAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [userDetails,setUserDetails]=useState({
    email:"",
    password:""
  })

 

 
  

  const handleLogin=async()=>{
    const {email,password}=userDetails
    if(!email || !password){
      Alert.alert("Please fill the form completely")
    }
    else{
      const result =await loginAPI(userDetails)
      if(result.status==200){
        Alert.alert("You have logined successfully")
        navigation.navigate("Home")
        setUserDetails({
          email:"",
          password:""
        })
      }
      else{
        console.log(result);
        Alert.alert(result.message)
      }
    }
  }

  return (
    <SafeAreaView style={styles.loginContainer}>
     <ScrollView>
        
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
             <Text style={styles.logoText}>Company Logo</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Login</Text>
          <View>
            <TextInput value={userDetails.email} onChangeText={(text)=>setUserDetails({...userDetails,email:text})}  style={styles.input} placeholder="Email" placeholderTextColor={"black"} />
            <TextInput value={userDetails.password} onChangeText={(text)=>setUserDetails({...userDetails,password:text})}  secureTextEntry={true} style={styles.input} placeholder="Password" placeholderTextColor={"black"} />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text  style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have any account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Sign Up")}>
              <Text style={styles.signupLink}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "black",
    flex: 1
  },
  logoContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1E1E1E"
  },
  logoText: {
    color: "white"
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#eeeeee",
    borderTopLeftRadius: 80,
    paddingBottom:40
  },
  formTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 40,
    marginTop: 50,
    marginBottom:50
  },
  input: {
    height: 60,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 5
  },
  button: {
    height: 60,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  signupText: {
    fontSize: 15,
    color: 'black',
    fontWeight:"bold"
  },
  signupLink: {
    fontSize: 15,
    color: 'black',
    fontWeight:"bold"

  }
});
