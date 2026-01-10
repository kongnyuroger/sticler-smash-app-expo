import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#25292e",
    },
    text: {
      fontSize: 20,
      color: "#fff",
    },
    button: {
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fff"
     }
  });
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>hello Sticker smacher</Text>
      
    </View>
  );
}

