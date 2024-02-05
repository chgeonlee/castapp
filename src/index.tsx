import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
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

  return <SafeAreaView style={{ flex: 1 }}>{pack}</SafeAreaView>;
}
