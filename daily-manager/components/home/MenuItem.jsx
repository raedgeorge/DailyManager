import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ title, color, icon, screen }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screen);
  };

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#B7D1DA" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name={icon} size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },

  gridItem: {
    flex: 1,
    margin: 16,
    height: 100,
    width: 240,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
