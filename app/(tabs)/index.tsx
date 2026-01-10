import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  const placeHolderImage = require("../../assets/images/backgroundImg.jpg");
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
     },
     image: {
      width: 320,
      height: 440,
      borderRadius: 14,
     }
  });
  return (
    <View
      style={styles.container}
    >
      <Image source={placeHolderImage} style={styles.image} />
      <Text style={styles.text}>hello Sticker smacher</Text>
    
    </View>
  );
}

