/**
 * @format
 */

import {AppRegistry, useColorScheme} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { LightScheme } from './src/themes/lightScheme';
import { DarkScheme } from './src/themes/darkScheme';

const LightSchem={
  ...MD3LightTheme,
  colors:LightScheme
}
const DarkSchem={
  ...MD3DarkTheme,
  colors:DarkScheme
}


  

export default function Main() {
  const colorScheme=useColorScheme()
  const theme = colorScheme==='dark'?DarkSchem:LightSchem
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
