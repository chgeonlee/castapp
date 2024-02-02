import { Image, StyleSheet, Text, View } from "react-native";
import lib from "../../lib";
import PostImageCarousel from "../carousel/PostImageCarousel";
import { useRef, useState } from "react";

const DEFAULT_HORIZONTAL_GAP = lib.size.gap(3);
const DEFAULT_VERTICAL_GAP = lib.size.gap(4);
/**
 * 카드 헤더 뷰
 *
 */
const CardHeader = ({ uri, id }) => {
  return (
    <View style={[deco.row, { paddingHorizontal: DEFAULT_HORIZONTAL_GAP }]}>
      <View style={deco.col1}>
        <Image source={{ uri }} style={deco.headerThumb} />
      </View>
      <View
        style={[
          deco.col2,
          {
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          },
        ]}
      >
        <Text style={lib.style.font.normal(undefined, "600")}>{id}</Text>
        <Text style={lib.style.font.normal(undefined, "300")}>{"1일 전"}</Text>
      </View>
    </View>
  );
};

/**
 * 카드 컨텐츠 뷰
 *
 */
const CardContent = ({ text, mediaSet, contentWidth, offset }) => {
  const pack = [];

  if (mediaSet && mediaSet.length) {
    pack.push(
      <View key={pack.length} style={[deco.row]}>
        {/* {wide == false && <View style={deco.col1} />} */}
        <View style={[deco.col2, {}]}>
          <PostImageCarousel
            data={mediaSet}
            contentWidth={contentWidth}
            offset={offset}
          />
        </View>
      </View>
    );
  }
  if (text) {
    pack.push(
      <View
        key={pack.length}
        style={[deco.row, { paddingHorizontal: DEFAULT_HORIZONTAL_GAP }]}
      >
        {/* {wide == false && <View style={deco.col1} />} */}
        <View style={[deco.col2]}>
          <Text style={lib.style.font.normal(undefined, "400")}>{text}</Text>
        </View>
      </View>
    );
  }

  return <View style={deco.contentContainer}>{pack}</View>;
};

/**
 *  카드 스탯 뷰
 */

const CardStat = ({ wide }) => {
  const ICON_SIZE = 18;
  return (
    <View
      style={[
        deco.row,
        { paddingHorizontal: DEFAULT_HORIZONTAL_GAP, paddingTop: 0 },
      ]}
    >
      {/* {wide == false && <View style={deco.col1} />} */}
      <View style={[deco.col2, deco.statContainer]}>
        <View style={deco.statItem}>
          {lib.icon.heart(ICON_SIZE)}
          <Text style={lib.style.font.description(undefined, "500")}>11</Text>
        </View>
        <View style={deco.statItem}>
          {lib.icon.comment(ICON_SIZE)}
          <Text style={lib.style.font.description(undefined, "500")}>2.3K</Text>
        </View>
        <View style={deco.statItem}>{lib.icon.chat(ICON_SIZE)}</View>
        <View style={deco.statItem}>{lib.icon.credit(ICON_SIZE)}</View>
      </View>
    </View>
  );
};

interface RecordCardProps {
  data: {
    user: any;
    content: any;
  };
  wide?: boolean;
}

export default function RecordCard({ data, wide = false }: RecordCardProps) {
  const { user, content } = data;

  const [contentWidth, setContentWidth] = useState(320);

  const onLayout = (event) => {
    setContentWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={deco.wrap} onLayout={onLayout}>
      <CardHeader uri={user.thumb} id={user.id} />
      <CardContent
        text={content.text}
        mediaSet={content.media}
        contentWidth={contentWidth}
        offset={0}
      />
      <CardStat wide={wide} />
    </View>
  );
}

const THUMB_SIZE = lib.size.length(6);

const deco = StyleSheet.create({
  wrap: {
    backgroundColor: lib.palette.WHITE,
    gap: DEFAULT_VERTICAL_GAP,
    paddingVertical: DEFAULT_VERTICAL_GAP,
    paddingBottom: lib.size.gap(6),
    borderRadius: 12,
    borderBottomColor: lib.palette.MIST,
    borderBottomWidth: 3,
  },
  row: {
    flexDirection: "row",
    gap: DEFAULT_VERTICAL_GAP,
  },
  col1: {
    width: THUMB_SIZE,
  },
  col2: {
    flex: 1,
  },

  headerThumb: {
    width: "100%",
    height: lib.size.length(6),
    borderRadius: lib.size.length(5),
    borderColor: lib.palette.BLACK,
  },

  contentContainer: {
    gap: lib.size.gap(3),
  },

  statContainer: {
    flexDirection: "row",
    gap: DEFAULT_HORIZONTAL_GAP * 4,
    paddingTop: lib.size.gap(1),
  },

  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: lib.size.gap(1),
  },

  video: {
    alignSelf: "center",
    width: "100%",
    borderRadius: 12,
    height: 200,
  },
});
