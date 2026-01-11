import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const placeHolderImage = require("../../assets/images/backgroundImg.jpg");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#25292e",
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: "center",
      
    },
    imageContainer: {
      flex: 2 / 3,
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={placeHolderImage} />
      </View>

      <View style={styles.footerContainer}>
        <>
        <Button label="choose photo" theme="primary"/>
        <Button label="use this photo" />
        </>
      </View>
    </View>
  );
}
