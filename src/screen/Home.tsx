import { StyleSheet, Text, View } from "react-native";
import lib from "../lib";
import { Strings } from "../lib/const/string";

export default function HomeScreen() {
  return (
    <View style={styles.wrap}>
      <Text>{lib.const.string.get(Strings.STR_MSG_WELCOME)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    ...lib.style.center(),
  },
});
