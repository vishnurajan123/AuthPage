import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Register({navigation}) {

  const [userDetails,setUserDetails]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  })
 
  return (
    <View style={styles.loginContainer}>
<ScrollView>
  
        <View style={styles.logoContainer}>
             <Text style={styles.logoText}>Sign Up</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}></Text>
          <View>
            <TextInput value={userDetails.name} onChangeText={(text)=>setUserDetails({...userDetails,name:text}) }   style={styles.input} placeholder="Name" placeholderTextColor={"black"} />
            <TextInput value={userDetails.email} onChangeText={(text)=>setUserDetails({...userDetails,email:text}) } style={styles.input} placeholder="Email" placeholderTextColor={"black"} />
            <TextInput value={userDetails.phoneNumber} onChangeText={(text)=>setUserDetails({...userDetails,phoneNumber:text}) } style={styles.input} placeholder="Phone" placeholderTextColor={"black"} />
            <TextInput value={userDetails.password} onChangeText={(text)=>setUserDetails({...userDetails,password:text}) } secureTextEntry={true} style={styles.input} placeholder="Password" placeholderTextColor={"black"} />
            <TextInput value={userDetails.confirmPassword} onChangeText={(text)=>setUserDetails({...userDetails,confirmPassword:text}) } secureTextEntry={true} style={styles.input} placeholder="Confirm password" placeholderTextColor={"black"} />
  
            <TouchableOpacity  style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>You have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.signupLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "black",
    flex: 1
  },
  logoContainer: {
    height: 100,
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
    color: "white",
    fontSize:40
  },
  formContainer: {
    flex:1,
    paddingBottom:40,
    backgroundColor: "#eeeeee",
    borderTopLeftRadius: 80
  },
  formTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 40,
    marginTop: 10
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
    marginTop: 50,
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
