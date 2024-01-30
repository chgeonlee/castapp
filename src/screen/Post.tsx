import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import PostCard from "../component/card/post";
import PlainLabel from "../component/label/plain";

export default function PostScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          margin: 12,
        }}
      >
        <PlainLabel name={"전체"} selected />
        <PlainLabel name={"연결된"} />
      </View>
      <ScrollView>
        <View style={deco.container}>
          {[1, 2, 3].map((item, index) => {
            return <PostCard key={index} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const deco = StyleSheet.create({
  container: {
    gap: 12,
  },
});
