import { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RecordCard from "../component/card/record";
import { TextLabel } from "../component/label";
import LoadingViewComponent from "../component/loading";
import lib from "../lib";
import { ViewModeEnum } from "../lib/const";
import { Strings } from "../lib/const/string";
import resources from "../resources";
import { MarkDataProps } from "../resources/mark";
import Header from "../component/header";
import MapViewComponent from "../component/map";
import Typography, { TypographyType } from "../component/typography";
import { IconButton } from "../component/button";

const LocationView = ({ viewMode, onPressViewMode }) => {
  return (
    <View
      style={[styles.location]}
      //   source={
      //     {
      //       //uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA/wMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQIDBAUGB//EADkQAAICAQEFAwkECwAAAAAAAAABAgMRBAUSITFBIlFxBhMUMkJhcoGhkbHh8CMkM0NSYoKDksHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP49kjZGzLYFbJkmTOQK2ZbDZibwmBE8ts71o4RPRWB3hyPRVFtrCyca0e/S15kgN6qa0mzbrVwnNebh4vn9Mn5hn1/KLUZur00X2ao5l8T/AAwfIbAgAAFAAAAACgAAAAAwAAwMAAMDAADAwAAwAPVkmeJyhZng+ZvIFyZbJkgAkuL8CrmRLLyBqCO8EYrieiEAOtKyfU027TVK61diuLlL3nj01Lk0a25f5jRRoi+1a8/0r8QPg3WyusnbY8znJyk/ezmUgAoAAAoEKAAARQIMFKBAUAQFAEBQBAUAQFAHM6Rn0ZzAHXJUc0zaA1yWe/gIINcUjrTXxA61RyeumrOC6ejJ9TTaXvQF0eneFhcT83tjU+la6ycX2Ivch8K/Ofmfqdq2rQ7NssXryW7HxZ+JfICFIVAAAAKAACCKABR0AA/b7G2Ls6jZGlu1+hhqNXqE7U7JzShDOI8E0nnDfE720aCP7PZuij/aT+8D8DlDKP2FqojHFenpgu6NaR4bpwWexH7APz2O5fQu6+5/YfTtuXRJHktuz1wB59ySWWnjOMkPRrZOEaKeW7Hflw9qXH7sL5HmQFIaAGSlDA4gAAbg8NGAB61KrezKaPTVqdLDnKT8InywB96ra+kr/d2vwS/6eiPlLp6/U0tkn75JH5kAfV21tiW0/NxVXmq689nf3svv5I+UCoAgABQAAAwUAUAAe3Y+he0tpafRqW4rZ4nP+CK4yl8kmzxn6jyTo9H0eq18liVn6Crw5zf3ID7ms1MbLJThHzdfBVwXsQSxGPySSPm33mdRfw5nzrrmwNX3nhutzktlmTy2SyBiyeWZoh52+EX6ueOe4xNm6Xu1Wz6tKEfnz+gHO+x3XTsftPJhFKkBQVIuAIQoA4AAAAAAAAAAAUhQBSFADAKAAKAKEXkAUcvCTbfJLqz9nOPoWlo0UWv1eG7LHWb4zf8Alw8Ej4Hk7QrNoK+SzHTLzmP5vZ+vH5H1NTY8vLA8+ot5nisnk3bPOTzSYEnI4TZqUjlJgZk+ZqfZhXDuW8/F/lGYremk+T5mpvem33gYNJFwaSAmC4KkaSAw4mcHZIzKHVAeMAAAAAAAAAAVAACgAAUIAUqRCoC4AOulpeo1FdMfblhvuXVgfe2TV5jZilJdq9ub+FcF/t/YctRPLZ7dTKMUoxSUYxUUl0SXA+ZbLLYHnsZwkzrM4TAxJnJvJuRzYFr9ZvpyOhmpYj8zokBEjSRcGkgIkVI0kVICJGkipGkgPkgAAAAAAAAFABAvQAEAgKUhUBSkRQB9jyfpW/bqJcoLcT975nyD9Hpq/RNFXU/WxvT+J/n6ATUTy2eCbO108s80nkDEzhM7TOEwOUjnzeDpIVRzY/cB0UeCNpFSNYAmCpFSNJAEipFSNJARIqRrBcAfEAAAAAAAAKiFAFIUAECoCgAClJgoHq2dUrdXBS9WL3mfX1FuW+J4dnJVUOx+tN8PBCyziBZyyzk2ZcjDkAmzlJmpM4yYGZM70R7G93nnScpKK68D3RjhJdwDBUjSRcATBpIqRpICJFSKkaSAiRpIuDSQH54AAAAAAAApCgCkKBDRk0BQABosVvyUVzfIh6NJHtOx+ysLxA9Vs1WlFcksI8s7OIunxZwcgOu+ZcjnvEcgNORhsjZGwO2mjvW56Lie5I4aOGK3Lq2epIDKRrBcGkgIkaSKkaSAykaSLgqQEwaxwLguAPzQAAAAAAABQABQAIaAAoKAKeqvs6ZY68QAPNY8s5soAhHzAAgAA+tWkq4Jdx0QAGioADSNIAClQAFXM2iAD//Z",
      //       //uri: "https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-53691.jpg?size=626&ext=jpg&ga=GA1.1.2058968042.1707356327&semt=ais",
      //     }
      //   }
      //   blurRadius={5}
    >
      <View style={styles.tag}>
        {/* <Pressable
          style={{
            padding: lib.size.gap(0),
            borderRadius: 100,
            backgroundColor: lib.palette.MIST,
          }}
        >
          {lib.icon.refresh(20)}
        </Pressable> */}
        <Typography type={TypographyType.EMPHASIS}>
          서울특별시, 이태원
        </Typography>
      </View>
      {/* <Pressable onPress={onPressViewMode} style={{ flex: 1 }}>
        <View
          style={{
            ...lib.style.center(),
            ...lib.style.flat(),
            gap: 4,
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: lib.size.hgap(1),
            borderRadius: lib.size.round(0),
          }}
        >
          <TextLabel
            name={lib.const.string.get(
              viewMode === ViewModeEnum.LIST
                ? Strings.STR_MODE_MAP_VIEW
                : Strings.STR_MODE_LIST_VIEW
            )}
          ></TextLabel>
        </View>
      </Pressable> */}
    </View>
  );
};

const FilterView = ({ filter, deco }) => {
  return (
    <>
      <View style={[styles.setting]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filter}
        >
          <TextLabel
            name={lib.const.string.get(Strings.STR_FILTER_ALL_LABEL)}
            inverted={filter == null}
          />
          <TextLabel
            name={lib.const.string.get(Strings.STR_FILTER_LINKED_LABEL)}
          />
          <TextLabel
            name={lib.const.string.get(Strings.STR_FILTER_MY_RECORD_LABEL)}
          />
          <TextLabel name={"2022년도"} />
          <TextLabel name={"2021년도"} />
          <TextLabel
            name={lib.const.string.get(Strings.STR_FILTER_MY_RECORD_LABEL)}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default function MarkScreen() {
  const [viewMode, setViewMode] = useState<ViewModeEnum>(ViewModeEnum.LIST);
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState<MarkDataProps[] | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [filterViewStyle, setFilterViewStyle] = useState(styles.filter);

  useEffect(() => {
    const loadData = () => {
      setData(resources.mark.getData());
      setLoadingData(false);
    };

    lib.wire.on(lib.const.event.LOADED_MARK_DATA, loadData);

    resources.mark.fetch();

    return () => {
      lib.wire.off(lib.const.event.LOADED_MARK_DATA);
    };
  }, []);

  //a. loading 중일 때
  if (loadingData == true) {
    return (
      <View style={styles.wrap}>
        <Header />
        <LoadingViewComponent />
      </View>
    );
  }

  //b. 로딩은 완료했지만 데이터가 없을때
  if (data == null || data.length == 0) {
    /**
     * @todo data empty view component
     */
    return (
      <View style={styles.wrap}>
        <Header />
        <Text>Data Empty</Text>
      </View>
    );
  }
  const cloudButtonSize = 60;
  const cloudIconSize = 28;
  //c. 데이터 있을 경우, ViewMode가 map일때
  if (viewMode == ViewModeEnum.MAP) {
    return (
      <>
        <View style={styles.wrap}>
          {/* <Header /> */}
          <FilterView filter={filter} deco={filterViewStyle} />

          <View
            style={{
              flex: 1,
              zIndex: 100,
            }}
          >
            <MapViewComponent
              data={data}
              region={{
                latitude: data[0].location.latitude,
                longitude: data[0].location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
              clusteringEnabled
              scrollEnabled={true}
              zoomEnabled={true}
            />
          </View>
        </View>
        <Pressable
          onPress={() => {
            setViewMode(ViewModeEnum.LIST);
          }}
          style={{
            position: "absolute",
            bottom: 18,
            right: 18,
            width: cloudButtonSize,
            height: cloudButtonSize,
            borderRadius: cloudButtonSize,
            backgroundColor: "#29292988",
            zIndex: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          {lib.icon.list(cloudIconSize, lib.palette.WHITE)}
        </Pressable>
      </>
    );
  }
  //d. 데이터 있을 경우, ViewMode가 list 일때
  return (
    <>
      <ScrollView style={styles.wrap} stickyHeaderIndices={[1]}>
        <Header />
        <FilterView filter={filter} deco={filterViewStyle} />
        {/* 
        <LocationView
          viewMode={ViewModeEnum.LIST}
          onPressViewMode={() => setViewMode(ViewModeEnum.MAP)}
        /> */}

        <View style={styles.content}>
          {data.map((item) => {
            return <RecordCard key={item.dbid} data={item} />;
          })}
        </View>
      </ScrollView>
      <Pressable
        onPress={() => {
          setViewMode(ViewModeEnum.MAP);
        }}
        style={{
          position: "absolute",
          bottom: 18,
          right: 18,
          width: cloudButtonSize,
          height: cloudButtonSize,
          borderRadius: cloudButtonSize,
          backgroundColor: "#29292988",
          zIndex: 10,
          justifyContent: "center",
          alignItems: "center",
          shadowOpacity: 0.5,
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        {lib.icon.map(cloudIconSize, lib.palette.WHITE)}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    //backgroundColor: lib.palette.WHITE,
  },

  setting: {
    ...lib.style.flatBetween(),
    paddingHorizontal: lib.size.hgap(0),
    paddingVertical: lib.size.vgap(0),
    backgroundColor: lib.palette.WHITE,
  },

  filter: {
    ...lib.style.flat(),
    gap: lib.size.gap(0),
    alignItems: "center",
  },

  filterHidden: {
    ...lib.style.flat(),
    gap: lib.size.vgap(0),
    display: "none", // 위로 스크롤할 때 숨김
  },

  location: {
    ...lib.style.flatBetween(),
    gap: 8,
    alignItems: "center",
  },
  tag: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: lib.size.gap(0),
    paddingVertical: lib.size.vgap(1),
    paddingHorizontal: lib.size.hgap(2),
    flex: 2,
    // borderRadius: lib.size.round(2),
    // backgroundColor: lib.palette.MIST,
  },

  content: {},
});
