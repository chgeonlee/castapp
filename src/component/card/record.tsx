import { Image, StyleSheet, Text, View } from "react-native";
import lib from "../../lib";
import PostImageCarousel from "../carousel/PostImageCarousel";
import { useRef, useState } from "react";

/**
 * 카드 헤더 뷰
 *
 */
const CardHeader = ({ uri, id }) => {
  return (
    <View style={[deco.row, { paddingRight: lib.size.gap(4) }]}>
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
const CardContent = ({ text, mediaSet }) => {
  const pack = [];

  if (text) {
    pack.push(
      <View key={pack.length} style={deco.row}>
        <View style={deco.col1} />
        <View
          style={[
            deco.col2,
            {
              paddingHorizontal: lib.size.gap(0),
            },
          ]}
        >
          <Text style={lib.style.font.normal(undefined, "400")}>{text}</Text>
        </View>
      </View>
    );
  }

  if (mediaSet && mediaSet.length) {
    pack.push(
      <View key={pack.length} style={deco.row}>
        <View style={deco.col1} />
        <View style={[deco.col2]}>
          <PostImageCarousel data={mediaSet} />
        </View>
      </View>
    );
  }

  return <View style={deco.contentContainer}>{pack}</View>;
};

/**
 *  카드 스탯 뷰
 */

const CardStat = () => {
  const ICON_SIZE = 18;
  return (
    <View style={deco.row}>
      <View style={deco.col1} />
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
}

export default function RecordCard({ data }: RecordCardProps) {
  const { user, content } = data;

  return (
    <View style={deco.wrap}>
      <CardHeader uri={user.thumb} id={user.id} />
      <CardContent text={content.text} mediaSet={content.media} />
      <CardStat />
    </View>
  );
}

const THUMB_SIZE = lib.size.length(6);
const GAP = lib.size.gap(2);

const deco = StyleSheet.create({
  wrap: {
    backgroundColor: lib.palette.WHITE,
    gap: lib.size.gap(1),
    paddingVertical: lib.size.gap(4),
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: lib.size.gap(2),
    gap: lib.size.gap(2),
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
    gap: lib.size.gap(5),
    paddingVertical: lib.size.gap(2),
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
