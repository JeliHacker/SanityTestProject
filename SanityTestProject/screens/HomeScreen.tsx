import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Display")}
        title="Go to Display Screen"
      />
    </View>
  )
}

export default HomeScreen