import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./component/header";
import lib from "./lib";
import FindScreen from "./screen/find";
import HomeScreen from "./screen/home";
import LoginScreen from "./screen/login";
import MarkScreen from "./screen/mark";
import UserScreen from "./screen/user";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const TestScreen = () => {
  return (
    <View
      style={{ position: "absolute", top: 120, backgroundColor: "red" }}
    ></View>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AdditionalStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarShowLabel: false,
        tabBarActiveTintColor: lib.palette.BLACK,
      }}
    >
      <Stack.Group>
        <Tab.Screen
          name={lib.const.screen.HOME}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => lib.icon.home(undefined, color),
            header: () => <Header />,
            presentation: "modal",
          }}
        />
        <Tab.Screen
          name={lib.const.screen.MARK}
          component={MarkScreen}
          options={{
            tabBarIcon: ({ color }) => lib.icon.mark(undefined, color),
            header: () => null, // <Header />,
          }}
        />
      </Stack.Group>
      <Stack.Screen
        name="Plus"
        component={TestScreen}
        options={{ presentation: "modal", headerShown: false }}
      />

      <Tab.Screen
        name={lib.const.screen.FIND}
        component={FindScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.find(undefined, color),
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name={lib.const.screen.USER}
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.user(undefined, color),
          header: () => <Header />,
        }}
      />
    </Tab.Navigator>
  );
};

const TabContainer = ({ children }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <View style={{ padding: 12, flexDirection: "row" }}>
      {React.Children.map(children, (child, index) => {
        const selected = selectedTabIndex === index;
        return React.cloneElement(child, {
          selected,
          onSelect: () => {
            setSelectedTabIndex(index);
          },
        });
      })}
    </View>
  );
};

const TabItem = ({ icon, selected = false, onSelect = null, name = "" }) => {
  const navi = useNavigation();
  return (
    <Pressable
      onPress={() => {
        onSelect();
        console.log(name);
        navi.navigate(name);
      }}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>{icon(selected ? lib.palette.BLACK : lib.palette.GREY)}</View>
    </Pressable>
  );
};

export default function Navigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={lib.const.screen.HOME}
            component={HomeScreen}
            options={{
              //tabBarIcon: ({ color }) => lib.icon.home(undefined, color),
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name={lib.const.screen.MARK}
            component={MarkScreen}
            options={{
              //tabBarIcon: ({ color }) => lib.icon.home(undefined, color),
              header: () => null,
            }}
          />
          <Stack.Screen
            name={lib.const.screen.ADD}
            component={TestScreen}
            options={{
              presentation: "modal",
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
            name={lib.const.screen.USER}
            component={UserScreen}
            options={{
              header: () => <Header />,
            }}
          />
        </Stack.Navigator>
        <TabContainer>
          <TabItem
            icon={(c) => lib.icon.home(undefined, c)}
            name={lib.const.screen.HOME}
          />
          <TabItem
            icon={(c) => lib.icon.mark(undefined, c)}
            name={lib.const.screen.MARK}
          />
          <TabItem
            icon={(c) => lib.icon.plus(undefined, c)}
            name={lib.const.screen.ADD}
          />
          <TabItem
            icon={(c) => lib.icon.find(undefined, c)}
            name={lib.const.screen.FIND}
          />
          <TabItem
            icon={(c) => lib.icon.user(undefined, c)}
            name={lib.const.screen.USER}
          />
        </TabContainer>
      </NavigationContainer>
    </>
  );
}
