import { Image, StyleSheet, Text, View } from "react-native";
import lib from "../../lib";

export default function PostCard() {
  const name = "충건";
  const id = "chgeon.lee";
  const thumb =
    "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg";
  const txt =
    "애플이 아마존, 구글, 마이크로소프트를 제치고 세계에서 가장 가치 있는 브랜드 1위를 차지했다고 브랜드파이낸스가 발표\n\n- 애플은 브랜드 가치가 74%의 괄목할 만한 성장 달성\n- AI는 세계에서 가장 빠르게 성장하는 브랜드 엔비디아와 함께 붐을 이뤄\n- 도이치텔레콤은 글로벌 톱10에 진입\n- 테슬라는 10위권서 18위로 추락\n\n런던 2024년 1월 17일 /PRNewswire=연합뉴스/ -- 애플은 올해 2,190억 달러(74%)가 증가한 5,170억 달러를 기록하며 세계에서 가장 가치 있는 브랜드라는 타이틀을 되찾는 엄청난 브랜드 가치 성장을 달성했다.\n\n매년, 최고의 브랜드 가치 평가 컨설팅 회사인 브랜드파이낸스(Brand Finance)[https://brandfinance.com/ ]는 가장 큰 브랜드 5,000 개를 검증한다. 세계에서 가장 가치 있고 강력한 글로벌 500대 브랜드는 년례 브랜드파이낸스 글로벌500 2024 순위[https://brandirectory.com/rankings/global/ ]에 들어간다.\n";
  return (
    <View style={deco.wrap}>
      <View style={deco.row}>
        <View style={deco.column1}>
          <Image
            source={{
              uri: thumb,
            }}
            style={deco.thumb}
          />
        </View>
        <View style={[deco.column2, { justifyContent: "center" }]}>
          <Text>{id}</Text>
        </View>
      </View>
      <View style={deco.row}>
        <View style={[deco.column1, { alignItems: "center" }]}>
          <View style={deco.edge} />
        </View>
        <View
          style={[
            deco.column2,
            {
              justifyContent: "center",
              borderRadius: 12,
            },
          ]}
        >
          <Text>{txt}</Text>
        </View>
      </View>
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    backgroundColor: lib.palette.WHITE,
    padding: 12,
  },
  row: { flexDirection: "row", gap: lib.size.gap(3) },
  column1: {
    width: lib.size.length(4),
  },
  column2: {
    flex: 1,
  },

  thumb: {
    width: "100%",
    height: lib.size.length(4),
    borderRadius: lib.size.length(5),
  },

  edge: {
    borderWidth: 0.5,
    borderColor: lib.palette.SILVER,
    flex: 1,
    width: 1,
    marginVertical: 12,
  },
});
