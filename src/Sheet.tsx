import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { View } from "react-native";

export default function GlobalSheet() {
  const ref = useRef<BottomSheet>();
  const snap = ["50%"];

  return (
    <BottomSheet
      //enablePanDownToClose={true}
      snapPoints={snap}
      index={0}
      ref={ref}
      style={{ display: "none" }}
    >
      {null}
    </BottomSheet>
  );
}
