import { FlatList, View, StyleSheet } from "react-native";
import { menuItems } from "../../menu-items";
import MenuItem from "./MenuItem";

const Home = () => {
  const renderMenuItems = ({ item }) => {
    return (
      <MenuItem
        id={item.id}
        title={item.title}
        color={item.color}
        icon={item.icon}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItems}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
});