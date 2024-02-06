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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarShowLabel: false,
        tabBarActiveTintColor: lib.palette.BLACK,
      }}
    >
      <Tab.Screen
        name={lib.const.screen.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => lib.icon.home(undefined, color),
          header: () => <Header />,
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

export default function Navigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
