import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import NotificationPopup from 'react-native-push-notification-popup';

export default function App() {
  const childRef = useRef<NotificationPopup>(null);

  const showMessage = () => {
    childRef.current?.show({
      onPress: function() {console.log('Pressed')},
      appIconSource: require('./assets/icon.png'),
      appTitle: 'Some App',
      timeText: 'Now',
      title: 'Hello World',
      body: 'This is a sample message.\nTesting emoji 😀',
      slideOutTime: 5000
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Show Message' onPress={showMessage} />
      <NotificationPopup ref={childRef} />
      <StatusBar style="auto" />
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
});
