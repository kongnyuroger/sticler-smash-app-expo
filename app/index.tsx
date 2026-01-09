import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  });
  return (
    <View
      style={styles.container}
    >
      <Text>hello world .  sub . i know life might be hard now but keep believing and you'll find your way through.</Text>
    </View>
  );
}

