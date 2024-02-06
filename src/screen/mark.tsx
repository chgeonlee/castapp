import { useEffect, useRef, useState } from "react";
import {
  Image,
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
import { BorderDirection } from "../lib/style";

const FilterView = ({ filter, deco }) => {
  return (
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

  const pack = [];
  const nset = [];

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

  //c. 데이터 있을 경우, ViewMode가 map일때
  if (viewMode == ViewModeEnum.MAP) {
    return (
      <View style={styles.wrap}>
        <Header />
        <FilterView filter={filter} deco={filterViewStyle} />

        <View key={nset.length} style={styles.location}>
          <View style={styles.tag}>
            <Text>서울특별시, 이태원로</Text>
          </View>
          <Pressable
            onPress={() => {
              setViewMode(ViewModeEnum.LIST);
            }}
            style={{ flex: 1 }}
          >
            <View
              style={{
                backgroundColor: lib.palette.MIST,
                flex: 1,
                paddingHorizontal: lib.size.hgap(1),
                ...lib.style.center(),
                borderRadius: lib.size.round(0),
              }}
            >
              <Text>{lib.const.string.get(Strings.STR_MODE_LIST_VIEW)}</Text>
            </View>
          </Pressable>
        </View>
        <MapViewComponent
          data={data}
          region={{
            latitude: data[0].location.latitude,
            longitude: data[0].location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          clusteringEnabled
        />
      </View>
    );
  }

  //d. 데이터 있을 경우, ViewMode가 list 일때
  return (
    <>
      <ScrollView style={styles.wrap} stickyHeaderIndices={[1]}>
        <Header />
        <FilterView filter={filter} deco={filterViewStyle} />
        <View key={nset.length} style={styles.location}>
          <View style={styles.tag}>
            <Text>서울특별시, 이태원로</Text>
          </View>
          <Pressable
            onPress={() => {
              setViewMode(ViewModeEnum.MAP);
            }}
            style={{ flex: 1 }}
          >
            <View
              style={{
                backgroundColor: lib.palette.MIST,
                flex: 1,
                paddingHorizontal: lib.size.hgap(1),
                ...lib.style.center(),
                borderRadius: lib.size.round(0),
              }}
            >
              <Text>{lib.const.string.get(Strings.STR_MODE_MAP_VIEW)}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.content}>
          {data.map((item) => {
            return <RecordCard key={item.dbid} data={item} />;
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
  },

  setting: {
    ...lib.style.flatBetween(),
    height: lib.size.rowh(2),
    paddingHorizontal: lib.size.hgap(0),
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
    paddingVertical: 4,
    paddingHorizontal: lib.size.hgap(0),
    marginVertical: 4,
    gap: 8,
  },
  tag: {
    padding: lib.size.gap(0),
    paddingHorizontal: lib.size.hgap(1),
    flex: 2,
    ...lib.style.center(),
    // borderRadius: lib.size.round(2),
    // backgroundColor: lib.palette.MIST,
  },

  content: {
    gap: lib.size.vgap(0),
  },
});
