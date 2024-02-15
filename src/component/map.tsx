import MapView from "react-native-map-clustering";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MarkDataProps } from "../resources/mark";
import { Callout, Marker, Circle } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import { BlurView } from "expo-blur";
import RecordCard from "./card/post";
import lib from "../lib";
import BottomDrawer, {
  BottomDrawerMethods,
} from "react-native-animated-bottom-drawer";

const CustomMapView = ({
  region,
  zoomEnabled,
  scrollEnabled,
  clusteringEnabled,
  data,
  onSelectedItem,
}) => {
  return (
    <View style={styles.wrap}>
      <MapView
        style={styles.map}
        initialRegion={region}
        zoomEnabled={zoomEnabled}
        rotateEnabled={false}
        scrollEnabled={scrollEnabled}
        showsUserLocation
        clusteringEnabled={clusteringEnabled}
        showsBuildings={false}
        onPress={(e) => {
          e.preventDefault();
        }}
      >
        <Circle
          center={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          radius={3000}
          //fillColor="rgba(165, 165, 175, 0.2)"
          strokeColor="rgba(35, 35, 55, 0.3)"
          strokeWidth={1}
        />
        {data?.map((item) => {
          const daydiff = lib.time.dayDiff(item.trace.created_at);
          let s = 72;
          const scale = 5;
          const borderWidth = 6;

          if (daydiff < 5) {
            s = s - daydiff * scale;
          } else {
            s = s - 5 * scale;
          }

          return (
            <Marker
              key={item.dbid}
              onPress={() => {
                onSelectedItem(item);
                return;
              }}
              coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude,
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    width: s,
                    height: s,
                    borderRadius: s,
                    overflow: "hidden",
                    backgroundColor: lib.palette.WHITE,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: item.user.thumbnail,
                    }}
                    style={{
                      width: s - borderWidth,
                      height: s - borderWidth,
                      borderRadius: s,
                    }}
                  />
                </View>
              </View>
              <Callout tooltip={true} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default function MapViewComponent({
  data,
  region,
  scrollEnabled = true,
  zoomEnabled = true,
  clusteringEnabled = false,
}: {
  data: MarkDataProps[] | null;
  region: any;
  scrollEnabled: boolean;
  zoomEnabled: boolean;
  clusteringEnabled: boolean;
}) {
  const [selectedItem, setSelectedItem] = useState(undefined);
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const bottomDrawerRef2 = useRef<BottomDrawerMethods>(null);

  useEffect(() => {
    if (contentHeight == 0) return;
    bottomDrawerRef.current.open(contentHeight + 120);
  }, [contentHeight]);

  const pack = [] as React.ReactNode[];

  pack.push(
    <CustomMapView
      key={pack.length}
      data={data}
      region={region}
      scrollEnabled={scrollEnabled}
      zoomEnabled={zoomEnabled}
      clusteringEnabled={clusteringEnabled}
      onSelectedItem={(i) => setSelectedItem(i)}
    />
  );

  if (selectedItem) {
    pack.push(
      <BottomDrawer
        key={pack.length}
        ref={bottomDrawerRef}
        onClose={() => {
          setSelectedItem(null);
          setContentHeight(0);
        }}
        openOnMount
        initialHeight={contentHeight}
      >
        <View style={styles.contentContainer}>
          <View
            onLayout={(e) => {
              setContentHeight(e.nativeEvent.layout.height);
            }}
          >
            <RecordCard data={selectedItem} />
          </View>
        </View>
      </BottomDrawer>
    );
  }

  return <>{pack}</>;
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },

  map: { width: "100%", height: "100%" },
  contentContainer: {
    width: "100%",
    height: "100%",
  },
});
