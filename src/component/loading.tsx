import { Image, StyleSheet, View } from "react-native";
import lib from "../lib";

export default function LoadingViewComponent() {
  return (
    <View style={styles.wrap}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif",
        }}
        width={120}
        height={120}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    ...lib.style.center(),
  },
});
