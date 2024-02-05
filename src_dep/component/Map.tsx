import { Callout, Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import RecordCard from "./card/record";
import { useRef, useState } from "react";
import lib from "../lib";
const INITIAL_REGION = {
  latitude: 37.498095,
  longitude: 127.02761,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03,
};

export default function MapComponent({
  region,
  scrollEnabled = false,
  zoomEnabled = false,
  clusteringEnabled = false,
}) {
  const modalRef = useRef();
  const [selectedItem, setSelectedItem] = useState(undefined);

  return (
    <View style={styles.wrap}>
      <MapView
        style={styles.map}
        initialRegion={region || INITIAL_REGION}
        zoomEnabled={zoomEnabled}
        scrollEnabled={scrollEnabled}
        showsUserLocation
        clusteringEnabled={clusteringEnabled}
        onPress={(e) => {
          e.preventDefault();
        }}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3,
          4, 5, 6, 7, 8, 9, 10,
        ].map((n, idx) => (
          <Marker
            key={idx}
            onPress={() => {
              setSelectedItem(n);
              return;
            }}
            onCalloutPress={() => {}}
            title="고구마 고무마!!!"
            description="Big Buck Bunny !!!"
            coordinate={{
              latitude:
                (region.latitude || 37.498095) +
                (n / 1000) * Math.random() * 10,
              longitude:
                (region.longitude || 127.02761) +
                (n / 1000) * Math.random() * 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 42,
                  overflow: "hidden",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
                  }}
                  style={{ width: 38, height: 38, borderRadius: 40 }}
                />
              </View>
            </View>

            <Callout tooltip={true}></Callout>
          </Marker>
        ))}
      </MapView>
      {selectedItem && (
        <TouchableOpacity
          style={{
            flex: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          onPress={(e) => {
            e.preventDefault();
            setSelectedItem(undefined);
          }}
        >
          <BlurView
            style={{
              width: "100%",
              position: "absolute",
              height: "100%",
              backgroundColor: "",
              zIndex: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: 24,
            }}
          >
            <Pressable
              style={{ width: "100%", overflow: "hidden" }}
              onPress={(e) => {
                e.stopPropagation();
              }}
            >
              <RecordCard data={SAMPLE} wide />
            </Pressable>
          </BlurView>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  map: { width: "100%", height: "100%" },
});

const SAMPLE = {
  user: {
    id: "chgeon.lee",
    thumb:
      "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
  },
  content: {
    upload_at: "2024-01-22T00:00:00Z",
    text: "Big Buck Bunny !!!",
    media: [
      {
        url: "https://i.pinimg.com/originals/2f/35/ef/2f35ef6a543a9eccd24c31445040fcd2.gif",
        type: "video",
        size: {
          width: 682,
          height: 682,
        },
      },
    ],
  },
};
