import { registerRootComponent } from "expo";
import React from "react";
import {StyleSheet,Text } from "react-native";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView>
      <Text style={s.title}>Hello prerna </Text>
      </SafeAreaView>

     </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
    title:{
      color:"red",
      fontSize:100,
      marginTop:50,
    },
});

registerRootComponent(App);
