import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";


export default function Index() {
  const placeHolderImage = require("../../assets/images/backgroundImg.jpg");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#25292e",
    },
  
     image: {
      width: 320,
      height: 440,
      borderRadius: 14,
     },
     imageContainer: {flex: 1

     }
  });
  return (
    <>
    <View
      style={styles.container}
    >
      <ImageViewer imageSource={placeHolderImage} />
    
    </View>

    <View>
      <Button label="Scan QR Code" />
    </View>
    </>
  );
}

