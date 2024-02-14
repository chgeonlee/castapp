import { useState } from "react";
import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import lib from "../../lib";
import { MarkDataProps } from "../../resources/mark";
import RecordCarousel from "../carousel/record";
import Typography, { TypographyType } from "../typography";
import { CardStat } from "./footer";
import CardHeader from "./header";

export default function RecordCard({
  data,
  isWide = false,
}: {
  data: MarkDataProps;
  isWide?: boolean;
}) {
  const STAT_ICON_SIZE = 18;
  const [contentWidth, setContentWidth] = useState<number | null>();
  return (
    <View style={styles.wrap}>
      <CardHeader
        thumbnail={data.user.thumbnail}
        userId={data.user.id}
        tick={lib.time.tickerForm(data.trace.created_at)}
      />
      <View style={[styles.row2, { paddingHorizontal: 4 }]}>
        <View
          style={[styles.col2, { marginHorizontal: 0 }]}
          onLayout={(e) => {
            setContentWidth(e.nativeEvent.layout.width);
          }}
        >
          {data.record.text && (
            <Typography type={TypographyType.ARTICLE}>
              {data.record.text}
            </Typography>
          )}
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
      <CardStat />
    </View>
  );
}

const DEFAULT_GAP = 12;

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: lib.size.hgap(1),
    paddingVertical: lib.size.vgap(1),
    borderWidth: 1,
    borderColor: lib.palette.MIST,
    backgroundColor: lib.palette.WHITE,
    borderRadius: lib.size.round(0),
    gap: DEFAULT_GAP,
  },
  row1: {
    ...lib.style.flat(),
    height: lib.size.rowh(1),
    alignItems: "center",
    gap: DEFAULT_GAP,
  },
  row2: {
    ...lib.style.flat(),
    gap: DEFAULT_GAP,
    //borderWidth: 0.5,
  },
  col1: {
    justifyContent: "center",
    alignItems: "center",
  },
  col2: {
    rowGap: DEFAULT_GAP,
    columnGap: DEFAULT_GAP,
    flex: 1,
  },

  stat: {
    ...lib.style.flat(),
    alignItems: "center",
    gap: lib.size.hgap(0),
  },
});
