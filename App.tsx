import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Getstarted from './screens/Getstarted';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingIndicator from './screens/LoadingIndicator';

const Stack = createNativeStackNavigator();

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await AsyncStorage.getItem('first Load');
    if (data !== null) {
      setInitialLoad(false);
    }
    setIsLoading(false); 
  };

  useEffect(() => {
    getData();
  }, []); 

  console.log(`value : ${initialLoad}`);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!initialLoad ? (
          <>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
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
                },
              }}
            />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
          </>
        ) : (
          <>
            <Stack.Screen name='Getstarted' component={Getstarted} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
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
                },
              }}
            />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
