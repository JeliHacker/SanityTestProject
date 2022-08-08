import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DisplayScreen from './screens/DisplayScreen.tsx';
import HomeScreen from './screens/HomeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Display: DisplayScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "JackBeNimble",
    },
  }
);

console.log("App.js")
export default createAppContainer(navigator);





export default function App() {
  console.log("ran")
  return (
    <View style={styles.container}>
      <Text>SANITY TEST PROJECT</Text>
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
