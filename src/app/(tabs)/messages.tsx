import { ScrollView, StyleSheet, Text, View } from "react-native";
import UserMsgs from "../../../components/UserMsgs";

export default function Messages() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Edit src/app/index.tsx to edit this screendd.</Text>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=1"
          lastActive={2}
          username="ashley"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
        <UserMsgs
          avatar="https://i.pravatar.cc/300?img=2"
          lastActive={6}
          username="rose"
        ></UserMsgs>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
