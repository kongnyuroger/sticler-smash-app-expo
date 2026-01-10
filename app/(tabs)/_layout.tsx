import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return(
    <Tabs screenOptions={{
      tabBarActiveTintColor:"#ffd33d",
      headerStyle: { backgroundColor: "#25292e" },
      headerTitleStyle: { color: "#fff" },
      tabBarStyle: { backgroundColor: "#25292e" }
    }}
      
    >
      <Tabs.Screen
        name="index"
        options={{
           headerTitle: "stiker smacher",
           tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
           }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: "About",
            tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={size} color={color} />
        }}
        
      />
    </Tabs>
  ) ;
}
