import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RecordCard from "../component/card/record";
import EnableLocationViewComponent from "../component/EnableLocation";
import PlainLabel from "../component/label/plain";
import MapComponent from "../component/Map";
import Header from "../Header";
import useLocation from "../hook/useLocation";
import lib from "../lib";

const FilterView = ({ filter, onFilter, mode, onMode }) => {
  return (
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
          <Pressable onPress={() => onFilter("all")}>
            <PlainLabel name={"전체"} selected={filter == "all"} />
          </Pressable>
          <Pressable onPress={() => onFilter("my")}>
            <PlainLabel name={"내 기록 6"} selected={filter == "my"} />
          </Pressable>
          <Pressable onPress={() => onFilter("linked")}>
            <PlainLabel name={"연결된 120"} selected={filter == "linked"} />
          </Pressable>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => onMode(mode == "list" ? "map" : "list")}
        >
          <PlainLabel name={mode == "list" ? "지도보기" : "리스트보기"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LocationView = ({ address }) => {
  const getLocationText = () => {
    return address.region + " " + address.district + ", " + address.name;
  };
  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        margin: lib.size.gap(2),
        padding: lib.size.gap(2),
        flexDirection: "row",
        gap: lib.size.gap(2),
        borderRadius: 32,
      }}
    >
      <View
        style={{
          width: 28,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {lib.icon.navi(13, lib.palette.GREY)}
      </View>
      <Text style={lib.style.font.description()}>{getLocationText()}</Text>
    </View>
  );
};

export default function PinScreen() {
  const { availableLocation, locationData } = useLocation();

  const [filter, setFilter] = useState<string>("all");
  const [mode, setMode] = useState<"list" | "map">("list");

  const layout = useWindowDimensions();

  if (availableLocation == false || locationData == null) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: lib.palette.WHITE,
        }}
      >
        <EnableLocationViewComponent />
      </SafeAreaView>
    );
  }

  const pack = [];

  pack.push(<Header key={pack.length} name={"Local"} />);
  pack.push(
    <FilterView
      key={pack.length}
      mode={mode}
      filter={filter}
      onFilter={(v) => setFilter(v)}
      onMode={(v) => setMode(v)}
    />
  );
  pack.push(<LocationView key={pack.length} address={locationData.address} />);

  if (mode == "list") {
    pack.push(
      <View key={pack.length} style={deco.container}>
        {SAMPLE.map((item, index) => {
          return <RecordCard key={index} data={item} wide={false} />;
        })}
      </View>
    );
  } else {
    pack.push(
      <View key={pack.length} style={{ flex: 1, height: layout.height - 290 }}>
        <MapComponent
          region={{
            latitude: locationData.location.coords.latitude,
            longitude: locationData.location.coords.longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: lib.palette.WHITE }}>
      <ScrollView stickyHeaderIndices={[1]}>{pack}</ScrollView>
    </SafeAreaView>
  );
}

const deco = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: lib.size.gap(2),
    paddingRight: lib.size.gap(3),
    justifyContent: "space-between",
  },
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
