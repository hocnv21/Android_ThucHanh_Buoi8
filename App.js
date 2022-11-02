import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cau1 from "./Screens/Cau1";
import Cau2 from "./Screens/Cau2";
import cau3 from "./Screens/cau3";
import cau4 from "./Screens/cau4";
import cau5 from "./Screens/cau5";
import Cau6 from "./Screens/Cau6";
//import your components

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cau1">
        <Stack.Screen name="Cau1" component={Cau1} />
        <Stack.Screen name="Cau2" component={Cau2} />
        <Stack.Screen name="Cau3" component={cau3} />
        <Stack.Screen name="Cau4" component={cau4} />
        <Stack.Screen name="Cau5" component={cau5} />
        <Stack.Screen name="Cau6" component={Cau6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
});
