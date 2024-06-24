import { registerRootComponent } from "expo";
import React from "react";
import { Text } from "react-native";
import { Profile } from "./app/components/Profile/Profile";

export default function App() {
  return (
    <>
      <Text>Hello !</Text>
      <Text>Hello Prerna</Text>
      <Text>Hello Good Mng</Text>
      <Profile></Profile>
      <Text>Happy Friday</Text>
      
    </>
  );
}

registerRootComponent(App);
