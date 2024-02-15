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
      <View
        style={styles.content}
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
        <CardStat />
      </View>
    </View>
  );
}

const DEFAULT_GAP = 12;

const styles = StyleSheet.create({
  wrap: {
    padding: lib.size.gap(1),
    paddingBottom: 24,
    borderColor: lib.palette.MIST,
    backgroundColor: lib.palette.WHITE,
    gap: DEFAULT_GAP,
  },
  content: {
    gap: DEFAULT_GAP,
    flex: 1,
    //paddingHorizontal: 0,
  },
});
