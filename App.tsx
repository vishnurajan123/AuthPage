import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet, View,
} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Getstarted from './screens/Getstarted';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingIndicator from './screens/LoadingIndicator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FIcons from 'react-native-vector-icons/Foundation';
import EntypoIcons from 'react-native-vector-icons/Entypo'
import Wishlist from './tabs/Wishlist';
import IIcons from 'react-native-vector-icons/Ionicons'
import Cart from './tabs/Cart';
import FA6cons from 'react-native-vector-icons/FontAwesome6'
import Notification from './tabs/Notification';
import OctiIcons from 'react-native-vector-icons/Octicons'
import { createDrawerNavigator } from '@react-navigation/drawer';






const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator()
const Drawer=createDrawerNavigator()

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    const data = await AsyncStorage.getItem('first Laad');
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
            <Stack.Screen name='Home' component={TabNavigator} options={{ headerShown: false }}/>
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
            <Stack.Screen name='Home' component={TabNavigator} options={{ headerShown: false }}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}

export function TabNavigator(){
  return(

    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: { borderTopRightRadius: 20, borderTopLeftRadius: 30, height: 100 },
    }}>
      <Tab.Screen name='Home' component={Home} options={{
         tabBarIcon: ({ focused }) => (<FIcons style={{marginBottom:-25}} name='home' color={focused ? '#cc6d00' : 'grey'} size={30} />),
         tabBarLabel: ({ focused }) => (<View style={focused?styles.focus:styles.nofocus}></View> )
      }}></Tab.Screen>

<Tab.Screen name="Wishlist" component={Wishlist} options={{
        tabBarIcon: ({ focused }) => <IIcons style={{marginBottom:-25}} name='heart-half' color={focused ? '#cc6d00' : 'grey'} size={30} />,
        tabBarLabel: ({ focused }) => (<View style={focused?styles.focus:styles.nofocus}></View> )
      }} />
      <Tab.Screen name="Cart" component={MyDrawer} options={{
        tabBarIcon: ({ focused }) => <FA6cons style={{marginBottom:-25}} name='bag-shopping' color={focused ? '#cc6d00' : 'grey'} size={25} />,
        tabBarLabel: ({ focused }) => (<View style={focused?styles.focus:styles.nofocus}></View> )
      }} />
      <Tab.Screen name="Notification" component={Notification} options={{
        tabBarIcon: ({ focused }) => <OctiIcons style={{marginBottom:-25}} name='bell-fill' color={focused ? '#cc6d00' : 'grey'} size={25} />,
        tabBarLabel: ({ focused }) => (<View style={focused?styles.focus:styles.nofocus}></View> )
      }} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  focus:{
width:10,
height:5,
backgroundColor:"#cc6d00",
marginBottom:25,
borderRadius:5
  },
  nofocus:{
    width:0,
    height:4,
    backgroundColor:"#cc6d00",
    marginBottom:25,
    borderRadius:5
  }
});

export default App;
