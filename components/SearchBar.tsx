import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.input}>
      <Ionicons name={"search-outline"} size={20} color={"#ffff"} />
      <TextInput
        style={styles.searchtext}
        placeholder="Search or ask Meta AI"
        placeholderTextColor={"#A8A8A8"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    backgroundColor: "#262626",
    borderRadius: 15,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  searchtext: {
    flex: 1,
    color: "#A8A8A8",
  },
});
