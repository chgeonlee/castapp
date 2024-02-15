import { Image, ImageProps, Pressable, StyleSheet, View } from "react-native";
import lib from "../../lib";
import Typography, { TypographyType } from "../typography";

export default function CardHeader({ thumbnail, userId, tick = undefined }) {
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.user}>
        <Image
          source={{
            uri: thumbnail,
          }}
          style={styles.thumbnail as ImageProps}
        />
        <Typography type={TypographyType.EMPHASIS}>{userId}</Typography>
      </Pressable>

      <View style={styles.info}>
        {tick && (
          <>
            <Typography type={TypographyType.HINT}>{tick}</Typography>
            <View>{lib.icon.more(undefined, lib.palette.GREY)}</View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: { flexDirection: "row", alignItems: "center", gap: lib.size.gap(0) },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoTail: {
    flexDirection: "row",
    alignItems: "center",
    gap: lib.size.gap(0),
  },

  thumbnail: {
    ...lib.style.border(),
    ...lib.style.fill(),
    height: 42,
    width: 42,
    borderRadius: 100,
    borderWidth: 2,
  },
});
