import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

type Props = {
    imageSource: string;
};

export default function ImageViewer({ imageSource }: Props) {
  const styles = StyleSheet.create({
    
     image: {
      width: 320,
      height: 440,
      borderRadius: 14,
     },
     imageContainer: {flex: 1

     }
  });
  return (
    
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
    
  );
}

