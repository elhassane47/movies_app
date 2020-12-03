import { StatusBar } from 'expo-status-bar';
import React from 'react';
import logo from './assets/letterboxd-mac-icon.png'
import { StyleSheet, Text, View,Image } from 'react-native';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    width:150, height:150
  },
  hello:{
    fontSize:20, fontWeight:"200", 
    justifyContent: 'center',
  }
});
