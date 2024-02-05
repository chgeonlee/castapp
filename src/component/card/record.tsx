import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import lib from "../../lib";
import { BorderDirection } from "../../lib/style";
import { MarkDataProps } from "../../resources/mark";
import PostImageCarousel from "../carousel/PostImageCarousel";

export default function RecordCard({ data }: { data: MarkDataProps }) {
  const STAT_ICON_SIZE = 20;
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
          <View>{lib.icon.more()}</View>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={[styles.col1]}>
          <View style={[{ width: 1, flex: 1, left: "50%" }]} />
        </View>
        <View style={styles.col2}>
          {data.record.text && <Text>{data.record.text}</Text>}
          {data.record.mediaList && data.record.mediaList.length > 0 && (
            <PostImageCarousel data={data.record.mediaList} />
          )}
        </View>
      </View>
      <View
        style={[
          styles.row2,
          { alignItems: "center", paddingVertical: lib.size.hgap(0) },
        ]}
      >
        <View style={styles.col1}></View>
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
  },
  row1: {
    ...lib.style.flat(),
    height: lib.size.rowh(1),
    alignItems:"center",
    gap: 8//lib.size.hgap(0)
  },
  row2: {
    ...lib.style.flat(),
    gap: 8//lib.size.hgap(0)
    
  },
  col1: {
    width: lib.size.colw(1),
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
