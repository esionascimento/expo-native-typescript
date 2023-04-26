import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { NativeBaseProvider, Text } from "native-base";
import { theme } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <StatusBar backgroundColor={"#38A"} barStyle={"light-content"} />
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
