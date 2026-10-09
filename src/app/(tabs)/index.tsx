import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../../components/Post";
import PropButton from "../../../components/PropButton";
import StoryBar from "../../../components/StoryBar";

export default function Index() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.topbar}>
          <PropButton>
            <Ionicons name="add-outline" size={30} color="white" />
          </PropButton>
          <PropButton>
            <Image
              source={require("../../../assets/instaassests/Instagram.png")}
              style={styles.logo}
            ></Image>
          </PropButton>
          <PropButton>
            <Ionicons name="heart-outline" size={30} color="white" />
          </PropButton>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.story}>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=1"
              username="ashley"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=2"
              username="rose"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=3"
              username="luna"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=4"
              username="jhon"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=5"
              username="user1231"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=6"
              username="ratlover42"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=7"
              username="kai"
            ></StoryBar>
            <StoryBar
              avatar="https://i.pravatar.cc/300?img=8"
              username="ashleybutagain"
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
          username="rose"
          profilePic="https://i.pravatar.cc/300?img=2"
          imageUrl="https://picsum.photos/seed/post2/600/800"
          postText="wow I love rats"
          likes="200"
          comments="100"
          reposts="204"
          shares="121"
        ></Post>
        <Post
          username="luna"
          profilePic="https://i.pravatar.cc/300?img=3"
          imageUrl="https://picsum.photos/seed/post3/600/800"
          postText="wow I love rats"
          likes="200"
          comments="100"
          reposts="204"
          shares="121"
        ></Post>
        <Post
          username="jhon"
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
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 100, height: 100 },
});
