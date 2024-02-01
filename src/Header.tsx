import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import lib from "./lib";

export interface HeaderProps {
  name: string;
  onAdd?: () => void;
  onBack?: () => void;
}

export default function Header({ name, onAdd, onBack }: HeaderProps) {
  return (
    <View style={deco.wrap}>
      <View style={deco.icon}></View>
      <Text style={lib.style.font.header()}>{name}</Text>

      {onAdd ? (
        <TouchableOpacity
          onPress={onAdd}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <View style={deco.icon}>{lib.icon.plus(28)}</View>
        </TouchableOpacity>
      ) : (
        <View style={deco.icon}></View>
      )}
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: lib.size.gap(0),
    backgroundColor: lib.palette.WHITE,

    paddingHorizontal: lib.size.gap(3),
  },

  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
