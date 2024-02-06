import MapView from "react-native-map-clustering";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { MarkDataProps } from "../resources/mark";
import { Callout, Marker, Circle } from "react-native-maps";
import { useState } from "react";
import { BlurView } from "expo-blur";
import RecordCard from "./card/record";
import lib from "../lib";

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

  return (
    <>
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
            fillColor="rgba(25, 245, 15, 0.1)"
            strokeColor="rgba(125, 155, 215, 0.6)"
            strokeWidth={4} // 테두리 두께
          />
          {data?.map((item) => {
            const daydiff = lib.time.dayDiff(item.trace.created_at);
            let s = 72;
            const scale = 5;
            const borderWidth = 2;

            if (daydiff < 5) {
              s = s - daydiff * scale;
            } else {
              s = s - 5 * scale;
            }

            return (
              <Marker
                key={item.dbid}
                onPress={() => {
                  setSelectedItem(item);
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
                      backgroundColor: "white",
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
      {selectedItem && (
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            ...lib.style.fill(),
          }}
        >
          <BlurView
            intensity={5}
            style={{
              position: "absolute",
              ...lib.style.fill(),
              padding: 12,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{ flex: 1, width: "100%" }}
              onPress={() => setSelectedItem(undefined)}
            ></Pressable>
            <View
              style={{
                width: "100%",
                borderRadius: 8,
                backgroundColor: lib.palette.WHITE,
                paddingVertical: lib.size.vgap(0),
                borderWidth: 0.1,
                shadowRadius: 2,
                shadowColor: lib.palette.BLACK,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
              }}
            >
              <View style={{ zIndex: 1000 }}>
                <RecordCard data={selectedItem} />
              </View>
            </View>
            <Pressable
              style={{ flex: 4, width: "100%" }}
              onPress={() => setSelectedItem(undefined)}
            ></Pressable>
          </BlurView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },

  map: { width: "100%", height: "100%" },
});
