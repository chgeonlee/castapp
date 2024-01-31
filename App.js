import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Stage from "./src/stage";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Railway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Railway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });
  if (fontsLoaded)
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stage />
      </GestureHandlerRootView>
    );
  else {
    return <View></View>;
  }
}
