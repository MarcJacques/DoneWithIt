import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
console.log("App executed");

  return (
    // this is how you setup a view. 
    <SafeAreaView style={styles.container}> 
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //the view is flexible and grows to fit up to the edges of the screen 
    backgroundColor: 'darkturquoise',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
