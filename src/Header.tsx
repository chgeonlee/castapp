import { StyleSheet, Text, View } from "react-native";
import lib from "./lib";

export interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <View style={deco.wrap}>
      <Text>{name}</Text>
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: lib.size.gap(3),
    backgroundColor: lib.palette.WHITE,
  },
});
