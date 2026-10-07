import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../../components/Post";

export default function Index() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
      </View>
      <ScrollView>
        <Post
          username="ashley"
          profilePic="https://i.pravatar.cc/300?img=1"
          imageUrl="https://picsum.photos/seed/post1/600/800"
          postText="wow I love rats"
          likes="200"
          comments="100"
          reposts="204"
          shares="121"
        ></Post>
        <Post
          username="ashley"
          profilePic="https://i.pravatar.cc/300?img=2"
          imageUrl="https://picsum.photos/seed/post2/600/800"
          postText="wow I love rats"
          likes="200"
          comments="100"
          reposts="204"
          shares="121"
        ></Post>
        <Post
          username="ashley"
          profilePic="https://i.pravatar.cc/300?img=3"
          imageUrl="https://picsum.photos/seed/post3/600/800"
          postText="wow I love rats"
          likes="200"
          comments="100"
          reposts="204"
          shares="121"
        ></Post>
        <Post
          username="ashley"
          profilePic="https://i.pravatar.cc/300?img=4"
          imageUrl="https://picsum.photos/seed/post4/600/800"
          postText="wow I love rats"
          likes="200"
          comments="100"
          reposts="204"
          shares="121"
        ></Post>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: { flex: 1 },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    backgroundColor: "black",
  },
});
