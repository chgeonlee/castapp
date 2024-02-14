import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import lib from "../src/lib";
import useLogin from "./hook/useLogin";
import Navigator from "./navigator";
import LoginScreen from "./screen/login";

export default function Stage() {
  const { loggedUser, handleUserLogin } = useLogin();

  const pack = [];

  if (loggedUser === false) {
    pack.push(
      <LoginScreen key={pack.length} handleUserLogin={handleUserLogin} />
    );
  } else {
    pack.push(<Navigator key={pack.length} />);
  }

  return (
    <View style={{ flex: 1, backgroundColor: lib.palette.WHITE }}>{pack}</View>
  );
}
