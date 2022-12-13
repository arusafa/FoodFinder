import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

import { colors } from './global/styles'
import RootNavigator from './navigation/RootNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor={colors.statusbar} />

      <RootNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  }
})