
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';



const Stack=createNativeStackNavigator()


function App() {
  console.log("jgvjh");
  
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen 
  name='Sign Up' 
  component={Register}  
  options={{
    title: '',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center', // Align title text to center
    headerTitleStyle: {
      fontWeight: 'bold',
    }
   
  }} 
/>

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
