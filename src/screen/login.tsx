import { Pressable, StyleSheet, Text, View } from "react-native";
import lib from "../lib";
import { Strings } from "../lib/const/string";
import useLogin from "../hook/useLogin";

export default function LoginScreen({ handleUserLogin }) {
  return (
    <View>
      <Pressable onPress={handleUserLogin}>
        <Text>{lib.const.string.get(Strings.STR_LOGIN_BUTTON)}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {},
});
