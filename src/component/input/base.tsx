import React, { useState, useRef } from "react";
import { TextInput, View, Animated, StyleSheet } from "react-native";
import lib from "../../lib";

export default function BaseInput({ placeholder }) {
  return (
    <View
      style={{
        height: 36,
        borderWidth: 1,
        borderColor: lib.palette.GREY,
        borderRadius: 32,
        paddingHorizontal: 12,
        flexDirection: "row",
        gap: 4,
      }}
    >
      <View style={{ justifyContent: "center", height: "100%" }}>
        {lib.icon.find()}
      </View>
      <TextInput
        style={{
          flex: 1,
          height: "100%",
        }}
        placeholder={placeholder}
      />
    </View>
  );
}
