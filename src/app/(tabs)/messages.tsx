import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteBar from "../../../components/NoteBar";
import PropButton from "../../../components/PropButton";
import SearchBar from "../../../components/SearchBar";
import UserMsgs from "../../../components/UserMsgs";

export default function Messages() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <PropButton>
          <Ionicons name="add-outline" size={30} color="white" />
        </PropButton>

        <PropButton>
          <View style={styles.rowcontainor}>
            <Text style={styles.usernametextheader}>ratshley</Text>
            <Ionicons
              name="chevron-down-outline"
              size={15}
              color="white"
              style={styles.downarrow}
            />
          </View>
        </PropButton>
        <PropButton>
          <Ionicons name="create-outline" size={30} color="white" />
        </PropButton>
      </View>
      <ScrollView>
        <SearchBar></SearchBar>
        <ScrollView horizontal={true}>
          <View style={styles.notebar}>
            <NoteBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            />
            <NoteBar avatar="https://i.pravatar.cc/300?img=2" username="rose" />
            <NoteBar avatar="https://i.pravatar.cc/300?img=3" username="luna" />
            <NoteBar avatar="https://i.pravatar.cc/300?img=4" username="jhon" />
            <NoteBar
              avatar="https://i.pravatar.cc/300?img=5"
              username="user1231"
            />
            <NoteBar
              avatar="https://i.pravatar.cc/300?img=6"
              username="ratlover42"
            />
            <NoteBar avatar="https://i.pravatar.cc/300?img=7" username="kai" />
            <NoteBar
              avatar="https://i.pravatar.cc/300?img=8"
              username="ashleybutagain"
            />
          </View>
        </ScrollView>
        <Text style={styles.messagesheading}>Meassages</Text>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=1"
          lastActive={4}
          username="ashley"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=3"
          lastActive={12}
          username="luna"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=4"
          lastActive={16}
          username="jhon"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=5"
          lastActive={7}
          username="user1231"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=6"
          lastActive={42}
          username="ratlover42"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=7"
          lastActive={2}
          username="kai"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=8"
          lastActive={7}
          username="ashleybutagain"
        ></UserMsgs>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  usernametextheader: {
    color: "#ffffff",
    fontWeight: 500,
    textAlign: "center",
    fontSize: 25,
  },
  rowcontainor: {
    flexDirection: "row",
  },
  downarrow: {
    paddingTop: 10,
    paddingLeft: 5,
  },
  notebar: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  messagesheading: {
    color: "#ffffff",
    textAlign: "left",
    fontWeight: "700",
    fontSize: 15,
  },
});
