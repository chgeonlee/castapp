import { Image, SafeAreaView, Text, View } from "react-native";
import BaseInput from "../component/input/base";
import lib from "../lib";

export default function FindScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lib.palette.WHITE }}>
      <View style={{ paddingHorizontal: 12 }}>
        <BaseInput placeholder={"유저 이름 혹은 아이디"} />
      </View>
      <View style={{ padding: 12, gap: 12 }}>
        {SAMPLE.map((item, idx) => {
          return (
            <View key={idx} style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 52,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: item.thumb }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    flex: 1,
                    paddingHorizontal: 12,
                  }}
                >
                  <View>
                    <Text>{item.id}</Text>
                  </View>
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    flex: 1,
                    paddingHorizontal: 12,
                  }}
                >
                  <View>
                    <Text>{item.intr}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const SAMPLE = [
  {
    id: "chgeon.lee",
    name: "충건리",
    thumb:
      "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    intr: "충건인데요",
  },
  {
    id: "ugni502",
    name: "유진송",
    thumb:
      "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    intr: "유진",
  },
];
