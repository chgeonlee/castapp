import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecordCard from "../component/card/record";
import ThumbnailComponent, { ThumbnailType } from "../component/Thumbnail";
import lib from "../lib";

const BoardItem = ({ name, value }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: lib.size.gap(1),
      }}
    >
      <View>
        <Text style={lib.style.font.hint(undefined, "400")}>{name}</Text>
      </View>
      <View>
        <Text style={lib.style.font.subtitle(undefined, "800")}>{value}</Text>
      </View>
    </View>
  );
};

export default function UserScreen() {
  const [data, setData] = useState<any>();
  //data receive
  useEffect(() => {
    setData(SAMPLE);
  }, []);

  if (data == null) {
    return;
  }

  return (
    <SafeAreaView style={deco.wrap}>
      <ScrollView stickyHeaderIndices={[1]}>
        {/* 유저 카드 영역 */}
        <View style={deco.cardContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View style={{ flex: 1, gap: 12 }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={lib.style.font.subtitle(undefined, "800")}>
                  {data.name}
                </Text>
              </View>
              <View
                style={{
                  padding: 8,
                  backgroundColor: lib.palette.MIST,
                  borderRadius: 12,
                }}
              >
                <Text style={lib.style.font.description()}>
                  {data.introduceText}
                </Text>
              </View>
            </View>
            <View>
              <ThumbnailComponent
                uri={data.thumbnail}
                type={ThumbnailType.LARGE}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 24,
              paddingHorizontal: 4,
              gap: 12,
            }}
          >
            <BoardItem name={"팔로워"} value={14} />
            <BoardItem name={"팔로잉"} value={0} />
            <BoardItem name={"프리미엄 구독자"} value={14} />
            <BoardItem name={"구독중인 프리미엄"} value={0} />
          </View>
        </View>
        {/* 탭 컨테이너 영역 */}
        <View style={{ backgroundColor: "white" }}>
          <View style={deco.tabContainer}>
            <View style={[deco.tabItem, deco.selected]}>{lib.icon.post()}</View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {lib.icon.premium()}
            </View>
          </View>
        </View>
        <View>
          <View style={deco.container}>
            {SAMPLE2.map((item, index) => {
              return <RecordCard key={index} data={item} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const deco = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
  },

  cardContainer: {
    padding: lib.size.gap(4),
    gap: lib.size.gap(1),
  },

  profile: {
    justifyContent: "center",
    alignItems: "center",
    gap: lib.size.gap(1),
  },

  tabContainer: {
    marginTop: 12,
    borderBottomWidth: 0.5,
    borderColor: lib.palette.SILVER,
    flexDirection: "row",
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  selected: {
    borderBottomWidth: 2,
    borderColor: lib.palette.BLACK,
  },
});

const SAMPLE = {
  dbid: "userdbid",
  id: "chgeon.lee",
  name: "충건리",
  introduceText: "개발자 전용 공간",
  thumbnail:
    "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
  content: {},
};

const SAMPLE2 = [
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
