import { Tabs } from "expo-router";

export default function RootLayout() {
  return(
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "stiker smacher" }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: "About" }}
      />
    </Tabs>
  ) ;
}
