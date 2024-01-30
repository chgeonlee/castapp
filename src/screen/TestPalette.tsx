import { Text, View, ViewBase } from "react-native";
import lib from "../lib";

export default function TestPalette() {
  const paletteList = Object.entries(lib.palette).map(([key, value]) => {
    return (
      <View
        key={value}
        style={{ flexDirection: "row", gap: 12, marginVertical: 12 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>{key}</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>{value}</Text>
        </View>
        <View
          style={{
            backgroundColor: value,
            height: 30,
            flex: 1,
            borderWidth: 0.5,
          }}
        ></View>
      </View>
    );
  });
  return <View>{paletteList}</View>;
}
