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
    footerContainer: {
      flex: 1/3,
      alignItems: "center",
    }
  
    
  });
  return (
    
    <View
      style={styles.container}
    > 
    <View>
       <ImageViewer imageSource={placeHolderImage} />
    </View>

     <View>
      <Button label="choose photo" />
      <Button label="use this photo" />
    </View>
    
    </View>

    
    
  );
}

