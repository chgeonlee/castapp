import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PlainButton from "../../../src_dep/component/button/plain";
import useLogin from "../../hook/useLogin";
import lib from "../../lib";
import { CardMedia } from "./footer";
import CardHeader from "./header";
import { useNavigation } from "@react-navigation/native";

export default function WriteCard({}) {
  const { loggedUserData } = useLogin();
  const ref = useRef<TextInput>();

  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={108}
      style={styles.wrap}
    >
      <ScrollView style={{ flex: 1, gap: lib.size.gap(0) }}>
        <View style={{ padding: lib.size.gap(1) }}>
          <CardHeader
            userId={loggedUserData.id}
            thumbnail={loggedUserData.thumbnail}
          />
        </View>

        <View style={styles.content}>
          <View style={{ paddingHorizontal: lib.size.gap(1) }}>
            <TextInput
              ref={ref}
              placeholder={"새로운 기록을 남겨보세요.."}
              style={styles.inpt}
              onLayout={() => {
                ref.current.focus();
              }}
            />
          </View>
          <CardMedia
            onPressCamera={() => {
              navigation.navigate(lib.const.screen.CAMERA);
            }}
          />
        </View>
      </ScrollView>
      <View>
        <PlainButton name={"게시하기"} onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: lib.size.gap(0),
  },
  inpt: {
    //paddingHorizontal: lib.size.gap(0),
    paddingTop: lib.size.gap(0),
  },
});
