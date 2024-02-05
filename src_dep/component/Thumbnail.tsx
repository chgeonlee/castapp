import { Image, StyleSheet, View } from "react-native";

export enum ThumbnailType {
  SMALL,
  MEDIUM,
  LARGE,
}

export default function ThumbnailComponent({
  uri,
  type = ThumbnailType.MEDIUM,
}) {
  return (
    <View>
      <Image
        style={[
          type == ThumbnailType.MEDIUM
            ? styles.medium
            : type == ThumbnailType.LARGE
            ? styles.large
            : styles.small,
        ]}
        source={{ uri }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {},
  image: {},
  large: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
  medium: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  small: {
    width: 36,
    height: 36,
    borderRadius: 36,
  },
});
