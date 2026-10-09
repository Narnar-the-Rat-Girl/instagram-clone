import { Image, StyleSheet, Text, View } from "react-native";
import PropButton from "./PropButton";

type NoteBarProps = { username: string; avatar: string };

export default function NoteBar({ username, avatar }: NoteBarProps) {
  return (
    <PropButton>
      <View style={styles.notecontainer}>
        <Image source={{ uri: avatar }} style={styles.profilepic} />
        <Text style={styles.usernametext}>{username}</Text>
      </View>
    </PropButton>
  );
}

const styles = StyleSheet.create({
  notecontainer: {
    padding: 10,
  },
  profilepic: {
    width: 70,
    borderRadius: 40,
    height: 70,
  },
  usernametext: {
    color: "#ffffff",
    fontWeight: 500,
    textAlign: "center",
  },
});
