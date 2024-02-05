import { Image, StyleSheet, View } from "react-native";
import lib from "../lib";

export default function Header() {
  return (
    <View style={styles.wrap}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4kC3x6_rJ4PJFvxU8kYLcdgUvzobwt6AxQ&usqp=CAU",
          //uri: "https://st2.depositphotos.com/3477813/46801/v/450/depositphotos_468015576-stock-illustration-simple-minimalism-cute-cat-vector.jpg",
        }}
        width={40}
        height={40}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: lib.palette.WHITE,
    paddingVertical: 4,
    ...lib.style.center(),
  },
});
