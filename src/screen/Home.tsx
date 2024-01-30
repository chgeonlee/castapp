import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import constants from "../constants";
import lib from "../lib";

export default function HomeScreen() {
  return (
    <View style={deco.wrap}>
      <Text style={lib.style.font.description()}>
        당신의 일상을 기록해보세요.
      </Text>
      {/* <Image
        source={{
          uri: "https://media.istockphoto.com/id/1220190844/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B9%88%E0%B8%87-%E0%B8%8A%E0%B8%99%E0%B8%9A%E0%B8%97%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%96%E0%B8%99%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3-%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2.jpg?s=1024x1024&w=is&k=20&c=DdB2DMoEdtyLI-nJV86r9lo9w4jP1xyt7_mMqzRHeGE=",
        }}
        style={{
          width: "100%",
          height: 320,
        }}
      ></Image> */}
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    backgroundColor: lib.palette.WHITE,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
