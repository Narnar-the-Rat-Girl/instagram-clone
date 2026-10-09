import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type UserMsgsProps = {
  username: string;
  avatar: string;
  lastActive: number;
};

export default function UserMsgs({
  username,
  avatar,
  lastActive,
}: UserMsgsProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? "rgb(62, 63, 65)" : "transparent",
      })}
    >
      <View style={styles.usercards}>
        <Image source={{ uri: avatar }} style={styles.profilepic} />
        <View style={styles.userandlastactive}>
          <Text style={styles.usernametext}>{username}</Text>
          <Text style={styles.lastactivetext}>
            last Active {lastActive} hours ago
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  usercards: {
    flexDirection: "row",
    padding: 10,
  },
  usernametext: {
    color: "#ffffff",
    fontWeight: 500,
  },
  profilepic: {
    width: 70,
    borderRadius: 40,
    height: 70,
  },
  lastactivetext: {
    color: "#ffffff",
    fontWeight: 500,
    fontSize: 13,
  },
  userandlastactive: {
    padding: 10,
  },
});
