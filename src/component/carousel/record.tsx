import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState } from "react";
import lib from "../../lib";
const MAX_HEIGHT = 350;

const RecordCarousel = ({ data, containerWidth = 352, isWide = false }) => {
  const g = lib.size.hgap(0);
  const getSize = () => {
    if (data.length > 1) {
      let land = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].size.width > data[i].size.height) {
          land += 1;
        } else {
          land -= 1;
        }
      }
      const r = 14 / 9;
      let w = containerWidth;
      let h = land <= 0 ? w * r : w / r;

      if (h > MAX_HEIGHT) {
        h = MAX_HEIGHT;
        w = h / r;
      }

      return {
        itemWidth: w,
        itemHeight: h,
        radius: lib.size.round(0),
      };
    } else if (data.length == 1) {
      const r = data[0].size.width / data[0].size.height;
      let w = containerWidth;
      let h = containerWidth / r;

      if (h > MAX_HEIGHT) {
        h = MAX_HEIGHT;

        if (isWide == false) w = r > 1 ? h / r : h * r;
      }
      return {
        itemWidth: w,
        itemHeight: h,
        radius: lib.size.round(0),
      };
    } else {
      throw new Error();
    }
  };

  const { itemWidth, itemHeight, radius } = getSize();

  let gap = lib.size.gap(0);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: containerWidth,
          height: itemHeight,
        }}
      >
        <Image
          source={{ uri: item.url }}
          style={{
            borderRadius: radius,
            width: itemWidth,
            height: itemHeight,
          }}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      activeSlideAlignment={"start"}
      itemWidth={itemWidth + gap}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      containerCustomStyle={
        {
          // marginLeft: isWide ? 0 : -lib.size.colw(2),
          // paddingLeft: isWide ? 0 : lib.size.colw(2),
        }
      }
    />
  );
};

export default RecordCarousel;
