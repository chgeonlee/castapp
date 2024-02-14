import { Keyboard, StyleSheet, View } from "react-native";
import CardHeader from "../component/card/header";
import WriteCard from "../component/card/write";
import lib from "../lib";

export default function AddScreen() {
  return (
    <View style={styles.wrap}>
      <WriteCard />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
  },
});
