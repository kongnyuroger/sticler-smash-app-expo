import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";



type Props = {
    label: string;
    theme?: "primary" ;
};

export default function Button({ label, theme }: Props) {
  const styles = StyleSheet.create({
    
     buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      padding: 3
     },
     button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
     },
     buttonIcon: {
        paddingRight: 10,
        color: "ffff"
     },
     buttonLabel: {
        fontSize: 16,
        color: '#fff',
     }
  });
  if (theme === "primary") {
      return (
    

      <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
        <Pressable
            style={styles.button}
            onPress={() => alert(`you pressed the ${label} button`)}

        >
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
        
      </View>
    
  );
  }else{
    return (
    

      <View style={[styles.buttonContainer]}>
        <Pressable
            style={styles.button}
            onPress={() => alert(`you pressed the ${label} button`)}

        >
          
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
        
      </View>
    );
  }
}

