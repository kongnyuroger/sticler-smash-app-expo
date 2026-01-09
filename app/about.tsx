import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    text: {
      fontSize: 20,
      color: "#333",
    }
  });
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>About Screen</Text>
    </View>
  );
}

