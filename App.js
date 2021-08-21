import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button} from 'react-native';//add SafeAreaView to keep content in clear and viewable areas on the screen

export default function App() {
console.log("App executed");

  return (
    // 1. this is how you setup a view.
    // 2. be sure to keep track of how long text is. especially when using a limited numberOfLines; text will be truncated to fit the limit. 
    <SafeAreaView style={styles.container}> 
    <Button title="Click Me" onPress={() => console.log("Button tapped")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //the view is flexible and grows to fit up to the edges of the screen 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
