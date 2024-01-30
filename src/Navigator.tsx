import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/Home";
import AddPinScreen from "./screen/AddPin";
import constants from "./constants";
import TestPalette from "./screen/TestPalette";
import Header from "./Header";
import lib from "./lib";
import LoginScreen from "./screen/Login";
import { useState } from "react";
import PostScreen from "./screen/Post";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<any>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: lib.palette.BLACK,
        tabBarInactiveTintColor: lib.palette.GREY,
      }}
    >
      <Tab.Screen
        name={constants.screen.TAB_HOME}
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => lib.icon.home(undefined, color),
          header: () => <Header name={constants.screen.TAB_HOME} />,
        }}
      />
      <Tab.Screen
        name={constants.screen.TAB_POST}
        component={PostScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.post(undefined, color),
          header: () => <Header name={constants.screen.TAB_POST} />,
        }}
      />
      <Tab.Screen
        name={constants.screen.TAB_MARK}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.mark(undefined, color),
          header: () => <Header name={constants.screen.TAB_MARK} />,
        }}
      />
      <Tab.Screen
        name={constants.screen.TAB_FIND}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.find(undefined, color),
          header: () => <Header name={constants.screen.TAB_FIND} />,
        }}
      />
      <Tab.Screen
        name={constants.screen.TAB_USER}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.user(undefined, color),
          header: () => <Header name={constants.screen.TAB_USER} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigator() {
  const option = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={constants.screen.SCREEN_LOGIN}
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name={constants.screen.ADD_PIN}
          component={AddPinScreen}
          options={option}
        />
        <Stack.Screen
          name={constants.screen.DEFAULT}
          component={TabNavigator}
          options={option}
        />
        <Stack.Screen
          name={constants.screen.SCREEN_LOGIN}
          component={LoginScreen}
          options={option}
        ></Stack.Screen>
        <Stack.Screen
          name={constants.screen.TEST_PALETTE}
          component={TestPalette}
          options={option}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
