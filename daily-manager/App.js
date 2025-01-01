import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./components/home/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Daily Manager</Text>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d5d5",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: "auto",
    marginVertical: "10%",
  },
});
