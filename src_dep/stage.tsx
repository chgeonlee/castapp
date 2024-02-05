import { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import constants from "./constants";
import lib from "./lib";
import Navigator from "./Navigator";
import resources from "./resources";
import GlobalSheet from "./Sheet";

export default function Stage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
      <GlobalSheet />
    </SafeAreaView>
  );
}
