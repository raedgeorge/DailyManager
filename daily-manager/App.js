import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddHoliday from "./components/holidays/AddHoliday";
import HomePageScreen from "./screens/home/HomePageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import HolidayListScreen from "./screens/holidays/HolidayListScreen";
import AddHolidayScreen from "./screens/holidays/AddHolidayScreen";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { init } from "./database/db";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <NativeStack.Screen
          name="HomeScreen"
          component={HomePageScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.title}>Home Page</Text>
                <Ionicons name="home" size={20} color="#355691" />
              </View>
            ),
          }}
        />
        <NativeStack.Screen
          name="HolidayListScreen"
          component={TabNavigator}
          options={{
            title: "Holidays Page",
          }}
        />
        <NativeStack.Screen name="AddHolidayScreen" component={AddHoliday} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HolidayListTab"
        component={HolidayListScreen}
        options={{
          title: "Holiday List",
          tabBarLabelStyle: { color: "#355691", fontWeight: "bold" },
        }}
      />
      <Tab.Screen
        name="AddHolidayTab"
        component={AddHolidayScreen}
        options={{
          title: "Add Holiday",
          tabBarLabelStyle: { color: "#355691", fontWeight: "bold" },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Daily Manager</Text>
      <StatusBar style="auto" />
      {Stack()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d5d5",
  },

  headerTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: "auto",
    marginTop: "10%",
    marginBottom: "5%",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#355691",
  },
});
