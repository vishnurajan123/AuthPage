import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {registerAPI} from '../service/allAPI';
import {useForm, Controller} from 'react-hook-form';

export default function Register({navigation}) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const handleRegister = async e => {
    e.preventDefault();
    const {name, email, phoneNumber, password, confirmPassword} = userDetails;
    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      Alert.alert('Please fill the form completely');
    } else if (password !== confirmPassword) {
      Alert.alert("Password doesn't match");
    } else {
      const result = await registerAPI(userDetails);
      if (result.status == 200) {
        Alert.alert('User registered successfully');
        setUserDetails({
          name: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        });
        navigation.navigate('Login');
      } else {
        console.log(result);
        Alert.alert(result.message);
      }
    }
  };
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneno = /^\d{10}$/;

  return (
    <View style={styles.loginContainer}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Sign Up</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}></Text>
          <View>
            <Controller
              control={control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    style={[
                      styles.input,
                      {borderColor: error ? 'red' : 'white'},
                    ]}
                    placeholder="Name"
                    placeholderTextColor={'black'}
                  />

                  {error && (
                    <Text
                      style={{
                        color: 'red',
                        alignSelf: 'stretch',
                        marginLeft: 35,
                      }}>
                      {error.message || 'Invalid input'}
                    </Text>
                  )}
                </>
              )}
              name="name"
              rules={{required: 'Username is required',minLength:{
                value:3,message:"Minimum 3 charectors required"
              }}}
            />

<Controller
              control={control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[
                styles.input,
                {borderColor: error ? 'red' : 'white'},
              ]}
              placeholder="Email"
              placeholderTextColor={'black'}
            />
                  {error && (
                    <Text
                      style={{
                        color: 'red',
                        alignSelf: 'stretch',
                        marginLeft: 35,
                      }}>
                      {error.message || 'Invalid input'}
                    </Text>
                  )}
                </>
              )}
              name="email"
              rules={{required: 'Email is required',pattern:{
                value:email_regex,message:"Invalid email format"
              }}}
            />

<Controller
              control={control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                   <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[
                styles.input,
                {borderColor: error ? 'red' : 'white'},
              ]}
              placeholder="Phone"
              placeholderTextColor={'black'}
            />

                  {error && (
                    <Text
                      style={{
                        color: 'red',
                        alignSelf: 'stretch',
                        marginLeft: 35,
                      }}>
                      {error.message || 'Invalid input'}
                    </Text>
                  )}
                </>
              )}
              name="phoneNumber"
              rules={{required: 'Phone is required',minLength:{
                value:10,message:"Phone should be 10 digits"
              },pattern:{
                value:phoneno,message:"Invalid format"
              }}}
            />

<Controller
              control={control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
              style={[
                styles.input,
                {borderColor: error ? 'red' : 'white'},
              ]}
              placeholder="Password"
              placeholderTextColor={'black'}
            />

                  {error && (
                    <Text
                      style={{
                        color: 'red',
                        alignSelf: 'stretch',
                        marginLeft: 35,
                      }}>
                      {error.message || 'Invalid input'}
                    </Text>
                  )}
                </>
              )}
              name="password"
              rules={{required: 'Password is required',minLength:{
                value:3,message:"Password should be atleast 3 charectors"
              }}}
            />
            
            <Controller
              control={control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
              style={[
                styles.input,
                {borderColor: error ? 'red' : 'white'},
              ]}
              placeholder="Confirm password"
              placeholderTextColor={'black'}
            />

                  {error && (
                    <Text
                      style={{
                        color: 'red',
                        alignSelf: 'stretch',
                        marginLeft: 35,
                      }}>
                      {error.message || 'Invalid input'}
                    </Text>
                  )}
                </>
              )}
              name="confirmPassword"
              rules={{required: 'Confirm password is required'}}
            />
            
           
            
            

            <TouchableOpacity onPress={handleSubmit(handleRegister)} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>You have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: 'black',
    flex: 1,
  },
  logoContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  logoText: {
    color: 'white',
    fontSize: 40,
  },
  formContainer: {
    flex: 1,
    paddingBottom: 40,
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 80,
  },
  formTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10,
  },
  input: {
    height: 60,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 5,
    borderColor:"white"
  },
  button: {
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  signupText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  signupLink: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
