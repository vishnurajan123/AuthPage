
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';



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
    headerTitleAlign: 'center', 
    headerTitleStyle: {
      fontWeight: 'bold',
    }
   
  }} 
/>
<Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>


      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
