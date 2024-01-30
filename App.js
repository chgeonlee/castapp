import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Stage from "./src/stage";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Railway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Railway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stage />
    </GestureHandlerRootView>
  );
}
