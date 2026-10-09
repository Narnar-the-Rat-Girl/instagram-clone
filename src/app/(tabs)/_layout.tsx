import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={"#ffff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "reels",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "play-circle" : "play-circle-outline"}
              size={size}
              color={"#ffff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "messages",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "paper-plane" : "paper-plane-outline"}
              size={size}
              color={"#ffff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={"#ffff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={"#ffff"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
