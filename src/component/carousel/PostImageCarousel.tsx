import { Dimensions, Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState } from "react";

const MAX_HEIGHT = 400;

const PostImageCarousel = ({ data, wide }: any) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const p = wide ? 0 : 58;
  const g = 6;
  let contentWidth = Dimensions.get("window").width - 2 * p;
  let itemWidth = 0;
  let itemHeight = 0;

  if (data.length == 1) {
    const item = data[0];
    if (item.size) {
      const { width, height } = item.size;
      const ratio = height / width;

      itemWidth = width > contentWidth ? contentWidth : width;
      itemHeight = itemWidth * ratio;

      if (itemHeight > MAX_HEIGHT) {
        itemHeight = MAX_HEIGHT;
        itemWidth = itemHeight / ratio;
      }
    }
  } else {
    //let c = data.length > 2 ? 3 : 2;
    let c = 2;
    itemWidth = (contentWidth + p) / c;
    itemHeight = itemWidth * 1.5;
  }

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          width: contentWidth,
          height: itemHeight,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: itemWidth,
            height: itemHeight,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {item.type == "image" ? (
            <Image
              source={{ uri: item.url, cache: "force-cache" }}
              style={[
                {
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                },
              ]}
            />
          ) : (
            <Video
              ref={video}
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              //isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      activeSlideAlignment={"start"}
      itemWidth={itemWidth + g}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      containerCustomStyle={{
        marginLeft: -p,
        paddingLeft: p,
      }}
    ></Carousel>
  );
};

export default PostImageCarousel;
