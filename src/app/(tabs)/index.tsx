import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../../components/Post";
import StoryBar from "../../../components/StoryBar";

export default function Index() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.topbar}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Image
            source={require("../../../assets/instaassests/Instagram.png")}
            style={styles.logo}
          ></Image>
          <Ionicons name="heart-outline" size={24} color="white" />
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.story}>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
          </View>
        </ScrollView>
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
  story: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  page: {
    backgroundColor: "black",
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 100, height: 100 },
});
