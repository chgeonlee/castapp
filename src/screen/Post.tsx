import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import RecordCard from "../component/card/record";
import PlainLabel from "../component/label/plain";
import Header from "../Header";
import lib from "../lib";

export default function PostScreen() {
  const [filter, setFilter] = useState<string>("all");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header name={"Public"} />
        <View
          style={{
            backgroundColor: lib.palette.WHITE,
            paddingHorizontal: lib.size.gap(0),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: lib.size.gap(2),
            }}
          >
            <View style={deco.filterContainer}>
              <Pressable onPress={() => setFilter("all")}>
                <PlainLabel name={"전체"} selected={filter == "all"} />
              </Pressable>
              <Pressable onPress={() => setFilter("popular")}>
                <PlainLabel name={"인기있는"} selected={filter == "popular"} />
              </Pressable>
              <Pressable onPress={() => setFilter("linked")}>
                <PlainLabel name={"연결된"} selected={filter == "linked"} />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={deco.container}>
          {SAMPLE.map((item, index) => {
            return <RecordCard key={index} data={item} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const deco = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: lib.size.gap(1),
  },
  container: {
    gap: 2,
  },
});

const SAMPLE = [
  {
    user: {
      id: "chgeon.lee",
      thumb:
        "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    },
    content: {
      upload_at: "2024-01-22T00:00:00Z",
      text: "Big Buck Bunny !!!",
      media: [
        {
          url: "https://i.pinimg.com/originals/2f/35/ef/2f35ef6a543a9eccd24c31445040fcd2.gif",
          type: "video",
          size: {
            width: 682,
            height: 682,
          },
        },
      ],
    },
  },

  {
    user: {
      id: "chgeon.lee",
      thumb:
        "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    },
    content: {
      upload_at: "2024-01-22T00:00:00Z",
      text: "예시에서 onFocus와 onBlur 이벤트를 사용하려면 Expo SDK 44 이상이 필요합니다. Expo SDK 버전을 확인하고 필요한 경우 업그레이드하세요.",
      media: [
        {
          url: "https://i.pinimg.com/originals/2f/35/ef/2f35ef6a543a9eccd24c31445040fcd2.gif",
          type: "image",
          size: {
            width: 682,
            height: 682,
          },
        },
      ],
    },
  },

  {
    user: {
      id: "chgeon.lee",
      thumb:
        "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    },
    content: {
      text: "Apple has achieved a remarkable brand value increase, even as iPhone sales have largely plateaued, as its strategy of finding new markets, expanding its ecosystem, and encouraging upgrades to higher-value iPhones has been highly effective. Apple has maintained its position as the dominant player in the premium smartphone market, with a share of 71%.",
      media: [],
    },
  },

  {
    user: {
      id: "chgeon.lee",
      thumb:
        "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    },
    content: {
      upload_at: "2024-01-11T00:00:00Z",
      text: "5명의 멤버가 모여 어딘가 자유분방하면서도 결합력 있는 독특한 퍼포먼스를 선보인다. 소녀들이 '재밌게 즐긴다'란 표현이 어울리는 뉴진스만의 청춘 하이틴스러운 컨셉은 ‘자연스럽다’라는 느낌을 주어, 뉴진스가 많은 대중들에게 사랑 받는 데에 크게 기여한다.",
      media: [
        {
          url: "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/a8a17e27-f08b-484a-a5c1-a4e940e0364e.jpg",
          type: "image",
          // ratio: 158 / 351,
          size: {
            width: 251,
            height: 161,
          },
        },
        {
          url: "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/b98dc63d-f626-4ea0-9d56-5764b4d963dc.jpg",
          type: "image",
          //ratio: 188 / 188,
          size: {
            width: 251,
            height: 161,
          },
        },
      ],
    },
  },
];
