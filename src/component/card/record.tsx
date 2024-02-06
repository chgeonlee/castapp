import { useState } from "react";
import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import lib from "../../lib";
import { MarkDataProps } from "../../resources/mark";
import RecordCarousel from "../carousel/record";

export default function RecordCard({
  data,
  isWide = false,
}: {
  data: MarkDataProps;
  isWide?: boolean;
}) {
  const STAT_ICON_SIZE = 21;
  const [contentWidth, setContentWidth] = useState<number | null>();
  return (
    <View style={styles.wrap}>
      <View style={styles.row1}>
        <View style={styles.col1}>
          <Image
            source={{
              uri: data.user.thumbnail,
            }}
            style={styles.thumbnail as ImageProps}
          />
        </View>
        <View style={[styles.col2, lib.style.flatBetween()]}>
          <Text>{data.user.id}</Text>
          <View style={[lib.style.flat(), { alignItems: "center", gap: 4 }]}>
            <Text>{lib.time.tickerForm(data.trace.created_at)}</Text>
            <View>{lib.icon.more()}</View>
          </View>
        </View>
      </View>
      <View style={styles.row2}>
        {isWide == false && (
          <View style={[styles.col1]}>
            <View style={[{ width: 1, flex: 1, left: "50%" }]} />
          </View>
        )}

        <View
          style={[styles.col2]}
          onLayout={(e) => {
            const { x, y, width, height } = e.nativeEvent.layout;
            setContentWidth(width);
          }}
        >
          {data.record.text && <Text>{data.record.text}</Text>}
          {data.record.mediaList &&
            data.record.mediaList.length > 0 &&
            contentWidth > 0 && (
              <RecordCarousel
                data={data.record.mediaList}
                isWide={isWide}
                containerWidth={contentWidth}
              />
            )}
        </View>
      </View>
      <View
        style={[
          styles.row2,
          { alignItems: "center", paddingVertical: lib.size.hgap(1) },
        ]}
      >
        {isWide == false && <View style={styles.col1}></View>}
        <View style={[styles.col2, lib.style.flat()]}>
          <View style={styles.stat}>
            {lib.icon.heart(STAT_ICON_SIZE)}
            <Text>{data.stat.like}</Text>
          </View>
          <View style={styles.stat}>
            {lib.icon.comment(STAT_ICON_SIZE)}
            <Text>{data.stat.reply}</Text>
          </View>
          <View>{lib.icon.chat(STAT_ICON_SIZE)}</View>
          <View>{lib.icon.credit(STAT_ICON_SIZE)}</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: lib.size.hgap(0),
    paddingBottom: lib.size.vgap(0),
    gap: 8,
  },
  row1: {
    ...lib.style.flat(),
    height: lib.size.rowh(1),
    alignItems: "center",
    gap: 8, //lib.size.hgap(0)
  },
  row2: {
    ...lib.style.flat(),
    gap: 8, //lib.size.hgap(0)
  },
  col1: {
    width: lib.size.colw(1),
    ...lib.style.center(),
  },
  col2: {
    rowGap: lib.size.vgap(0),
    columnGap: lib.size.hgap(1),
    flex: 1,
  },

  thumbnail: {
    ...lib.style.border(),
    ...lib.style.fill(),
    height: 34,
    width: 34,
    borderRadius: 100,
  },

  stat: {
    ...lib.style.flat(),
    alignItems: "center",
    gap: 6,
  },
});
