import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./component/header";
import lib from "./lib";
import FindScreen from "./screen/find";
import HomeScreen from "./screen/home";
import UserScreen from "./screen/user";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AddScreen from "./screen/add";
import { Strings } from "./lib/const/string";
import CameraScreen from "./screen/camera";

const Stack = createStackNavigator();

const TabItem = ({ name, fnIcon, option = {}, focused = false }) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.tabItem}
      onPress={() => {
        navigation.navigate(name, option);
      }}
    >
      {fnIcon(undefined, focused ? lib.palette.BLACK : lib.palette.SILVER)}
    </Pressable>
  );
};

const TabContainer = () => {
  const navigation = useNavigation<any>();
  const [curr, setCurr] = useState(lib.const.screen.HOME);
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (e) => {
      const { state } = e.data;
      if (state) {
        setCurr(state.routes[state.routes.length - 1].name);
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: lib.palette.WHITE,
        paddingBottom: 36,
        zIndex: 1000,
      }}
    >
      <TabItem
        name={lib.const.screen.HOME}
        option={{ mode: "list" }}
        fnIcon={lib.icon.home}
        focused={curr == lib.const.screen.HOME}
      />
      <TabItem
        name={lib.const.screen.ADD}
        fnIcon={lib.icon.plus}
        focused={curr == lib.const.screen.ADD}
      />
      <TabItem
        name={lib.const.screen.FIND}
        fnIcon={lib.icon.find}
        focused={curr == lib.const.screen.FIND}
      />
      <TabItem
        name={lib.const.screen.USER}
        fnIcon={lib.icon.user}
        focused={curr == lib.const.screen.USER}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});

const CloseComponent = ({ navigation }) => {
  return (
    <Pressable
      style={{ padding: 12 }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      {lib.icon.close()}
    </Pressable>
  );
};

export default function Navigator() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name={lib.const.screen.HOME}
              component={HomeScreen}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name={lib.const.screen.FIND}
              component={FindScreen}
              options={{
                header: () => <Header />,
              }}
            />
            <Stack.Screen
              name={lib.const.screen.ADD}
              component={AddScreen}
              options={(routes) => {
                return {
                  presentation: "modal",
                  freezeOnBlur: true,
                  gestureResponseDistance: 1000,
                  animationEnabled: false,

                  title: lib.const.string.get(Strings.HEADER_NEW_RECORD),
                  headerLeft: () => <CloseComponent {...routes} />,
                };
              }}
            />

            <Stack.Screen
              name={lib.const.screen.USER}
              component={UserScreen}
              options={{
                header: () => <Header />,
              }}
            />
            <Stack.Screen
              name={lib.const.screen.CAMERA}
              component={CameraScreen}
              options={{
                header: () => null,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
        <TabContainer />
      </NavigationContainer>
    </>
  );
}
