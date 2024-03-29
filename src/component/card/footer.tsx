import { Pressable, StyleSheet, View } from "react-native";
import lib from "../../lib";
import Typography, { TypographyType } from "../typography";

export function CardStat() {
  const ICON_SIZE = 16;

  return (
    <View style={styles.wrap}>
      <View style={styles.statContainer}>
        <View style={styles.icon}>
          {lib.icon.heart(ICON_SIZE)}
          <Typography type={TypographyType.HINT}>좋아요 {12}</Typography>
        </View>
        <View style={styles.icon}>
          {lib.icon.comment(ICON_SIZE)}
          <Typography type={TypographyType.HINT}>댓글 {12}</Typography>
        </View>
        <View style={styles.icon}>
          {lib.icon.chat(ICON_SIZE)}
          <Typography type={TypographyType.HINT}>다이렉트</Typography>
        </View>
        <View style={styles.icon}>
          {lib.icon.credit(ICON_SIZE)}
          <Typography type={TypographyType.HINT}>구독</Typography>
        </View>
      </View>
    </View>
  );
}

export function CardMedia({ onPressCamera }) {
  const ICON_SIZE = 18;

  return (
    <View style={styles.wrap}>
      <View style={styles.mediaContainer}>
        <Pressable style={styles.icon} onPress={onPressCamera}>
          {lib.icon.camera(ICON_SIZE)}
        </Pressable>
        <Pressable style={styles.icon}>{lib.icon.picture(ICON_SIZE)}</Pressable>
        <Pressable style={styles.icon}>{lib.icon.link(ICON_SIZE)}</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {},
  statContainer: {
    flexDirection: "row",
    gap: lib.size.gap(1),
  },
  mediaContainer: {
    flexDirection: "row",
    padding: lib.size.gap(0),
    gap: lib.size.gap(1),
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    gap: lib.size.gap(0),
  },
});
