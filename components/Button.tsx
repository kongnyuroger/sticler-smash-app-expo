import { Pressable, StyleSheet, Text, View } from "react-native";


type Props = {
    label: string;
};

export default function Button({ label }: Props) {
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
     },
     buttonLabel: {
        fontSize: 16,
        color: '#fff',
     }
  });
  return (
    
      <View style={styles.buttonContainer}>
        <Pressable
            style={styles.button}
            onPress={() => alert(`you pressed the ${label} button`)}
        >
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
        
      </View>
    
  );
}

