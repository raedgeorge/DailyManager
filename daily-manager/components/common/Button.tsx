import { Pressable, View, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#fff" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    borderRadius: 48,
    elevation: 4,
    backgroundColor: "#0e48b3",
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "white",
  },
});
