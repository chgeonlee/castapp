import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import constants from "../constants";
import lib from "../lib";
import resources from "../resources";
import { useNavigation } from "@react-navigation/native";
import BaseInput from "../component/input/base";
import { LinearGradient } from "expo-linear-gradient";
import PlainButton from "../component/button/plain";

export default function LoginScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const handleLogin = () => {
      //@ts-ignore
      navigation.navigate(constants.screen.DEFAULT, undefined);
    };

    if (resources.user.logged() == true) {
    }

    lib.wire.on(constants.event.SUCCESS_LOGIN, handleLogin);

    return () => {
      lib.wire.off(constants.event.SUCCESS_LOGIN);
    };
  }, []);

  return (
    <View style={deco.wrap}>
      <View style={deco.logoContainer}>
        <Text style={lib.style.font.logo()}>CASTAPP</Text>
      </View>
      <View style={deco.inputContainer}>
        {/* <BaseInput placeholder={"사용자 아이디 혹은 이메일 주소"} />
        <BaseInput placeholder={"비밀번호"} /> */}
      </View>
      <PlainButton name={"로그인 하기"} onPress={resources.user.login} />
    </View>
  );
}

const deco = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
    justifyContent: "center",
    alignItems: "center",
    padding: lib.size.gap(3),
    gap: lib.size.gap(5),
  },

  logoContainer: {
    height: 32,
  },
  inputContainer: {
    width: "100%",
    gap: lib.size.gap(4),
  },
});
