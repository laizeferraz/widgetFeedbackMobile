import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Widget from './src/components/Widget';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { theme } from './src/theme';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return null
  }
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <StatusBar 
        style='light'
        backgroundColor='transparent' 
        translucent
      />
      <Widget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
