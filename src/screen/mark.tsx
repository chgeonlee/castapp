import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import RecordCard from "../component/card/record";
import Header from "../component/header";
import { TextLabel } from "../component/label";
import LoadingViewComponent from "../component/loading";
import lib from "../lib";
import { ViewModeEnum } from "../lib/const";
import { Strings } from "../lib/const/string";
import { BorderDirection } from "../lib/style";
import resources from "../resources";
import { MarkDataProps } from "../resources/mark";

const FilterView = ({ filter }) => {
  return (
    <View>
      <View style={styles.setting}>
        <View style={styles.filter}>
          <TextLabel
            name={lib.const.string.get(Strings.STR_FILTER_ALL_LABEL)}
            inverted={filter == null}
          />
          <TextLabel
            name={lib.const.string.get(Strings.STR_FILTER_LINKED_LABEL)}
          />
        </View>
        <View>
          <TextLabel name={lib.const.string.get(Strings.STR_MODE_MAP_VIEW)} />
        </View>
      </View>
    </View>
  );
};

export default function MarkScreen() {
  const [viewMode, setViewMode] = useState<ViewModeEnum>(ViewModeEnum.LIST);
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState<MarkDataProps[] | null>(null);
  const [loadingData, setLoadingData] = useState(true);

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

  if (loadingData == true) {
    //a. loading 중일 때
    pack.push(
      <View style={styles.wrap} key={pack.length}>
        <LoadingViewComponent />
      </View>
    );
  } else if (data == null || data.length == 0) {
    //b. 로딩은 완료했지만 데이터가 없을때
    pack.push(
      <View style={styles.wrap} key={pack.length}>
        <Text>Data Empty</Text>
      </View>
    );
  } else if (viewMode == ViewModeEnum.MAP) {
    //c. 데이터 있을 경우, ViewMode가 map일때

    pack.push(
      <View style={styles.wrap} key={pack.length}>
        <Text>Map Data {data.length}</Text>
      </View>
    );
  } else {
    //c. 데이터 있을 경우, ViewMode가 list 일때
    nset.push(<FilterView key={nset.length} filter={filter} />);
    nset.push(
      <View key={nset.length} style={styles.location}>
        {lib.icon.mark(16)}
        <Text>서울특별시, 이태원로</Text>
      </View>
    );
    nset.push(
      <View style={styles.content} key={nset.length}>
        {data.map((item) => {
          return <RecordCard key={item.dbid} data={item} />;
        })}
      </View>
    );

    pack.push(
      <ScrollView
        key={pack.length}
        style={styles.wrap}
        stickyHeaderIndices={[0]}
      >
        {nset}
      </ScrollView>
    );
  }

  return <>{pack}</>;
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
  },

  setting: {
    ...lib.style.flatBetween(),
    height: lib.size.rowh(1),
    paddingHorizontal: lib.size.hgap(0),
    backgroundColor: lib.palette.WHITE,
  },

  filter: {
    ...lib.style.flat(),
    gap: lib.size.vgap(0),
  },

  location: {
    ...lib.style.flat(),
    justifyContent: "flex-end",
    //alignItems: "flex-end",
    paddingVertical: lib.size.vgap(1),
    paddingHorizontal: lib.size.hgap(0),
    gap: 8,
  },

  content: {
    paddingVertical: lib.size.vgap(0),
    gap: lib.size.vgap(0),
  },
});
