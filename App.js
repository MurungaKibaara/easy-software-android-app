import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
