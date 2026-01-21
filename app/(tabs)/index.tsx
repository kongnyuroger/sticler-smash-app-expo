import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
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
    },
  });

  const pickedImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setSelectedImage(result.assets[0].uri);
      setIsImageSelected(true);
    } else {
      console.log("you did not select any image");
    }
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [showAppOptions, setAppOptions] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imageSource={selectedImage ? selectedImage : placeHolderImage}
        />
      </View>
      {isImageSelected ? (
        <View style={styles.footerContainer}>
          <Button
            label="choose photo"
            theme="primary"
            onPress={pickedImageAsync}
          />
          <Button label="use  photo" />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <>
            <Button
              label="choose photo"
              theme="primary"
              onPress={pickedImageAsync}
            />
            <Button
              onPress={() => setIsImageSelected(true)}
              label="use this photo"
            />
          </>
        </View>
      )}
    </View>
  );
}
