import { Image, ImageProps, StyleSheet, View } from "react-native";
import lib from "../../lib";
import Typography, { TypographyType } from "../typography";

export default function CardHeader({ thumbnail, userId, tick = undefined }) {
  return (
    <View style={styles.wrap}>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={styles.thumbnail as ImageProps}
      />
      <View style={styles.info}>
        <Typography type={TypographyType.EMPHASIS}>{userId}</Typography>
        {tick && (
          <View style={styles.infoTail}>
            <Typography type={TypographyType.HINT}>{tick}</Typography>
            <View>{lib.icon.more(undefined, lib.palette.GREY)}</View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    gap: lib.size.gap(0),
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  infoTail: {
    flexDirection: "row",
    alignItems: "center",
    gap: lib.size.gap(0),
  },

  thumbnail: {
    ...lib.style.border(),
    ...lib.style.fill(),
    height: 34,
    width: 34,
    borderRadius: 100,
  },
});
