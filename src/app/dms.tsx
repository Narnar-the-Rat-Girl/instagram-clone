import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dms() {
  const { username, avatar } = useLocalSearchParams<{
    username: string;
    avatar: string;
  }>();

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.topbar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </Pressable>
        <View style={styles.userinfo}>
          <Image source={{ uri: avatar }} style={styles.profilepic} />
          <Text style={styles.usernametext}>{username}</Text>
        </View>
        <View style={styles.topbaricons}>
          <Ionicons name="call-outline" size={24} color="white" />
          <Ionicons name="videocam-outline" size={24} color="white" />
        </View>
      </View>
      <View style={styles.input}>
        <Ionicons name={"camera"} size={25} color={"#ffffff"} />
        <TextInput
          style={styles.msgtext}
          placeholder="Message..."
          placeholderTextColor={"#A8A8A8"}
        />
        <View style={styles.msgicons}>
          <Ionicons name={"mic-outline"} size={25} color={"#ffff"} />
          <Ionicons name={"image-outline"} size={25} color={"#ffff"} />
          <Ionicons name={"document-outline"} size={25} color={"#ffff"} />
          <Ionicons name={"add-circle-outline"} size={25} color={"#ffff"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: { flex: 1 },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topbaricons: { flexDirection: "row", gap: 15 },
  userinfo: { flexDirection: "row", alignItems: "center", gap: 10 },
  usernametext: {
    color: "#ffffff",
    fontWeight: 500,
  },
  profilepic: {
    width: 40,
    borderRadius: 40,
    height: 40,
  },
  input: {
    // flex: 1,
    height: 40,
    marginTop: "auto",
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#262626",
    borderRadius: 15,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  msgtext: {
    flex: 1,
    color: "#eceaec",
  },
  msgicons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
