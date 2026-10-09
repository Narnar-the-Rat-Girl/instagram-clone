import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import PropButton from "./PropButton";

type PostProps = {
  username: string;
  profilePic: string;
  imageUrl: string;
  postText: string;
  likes: string;
  comments: string;
  reposts: string;
  shares: string;
};

export default function Post({
  username,
  profilePic,
  imageUrl,
  postText,
  likes,
  comments,
  reposts,
  shares,
}: PostProps) {
  return (
    <View style={styles.post}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.userinfo}>
        <Image source={profilePic} style={styles.profilepic} />
        <Text style={styles.usertext}>{username}</Text>
      </View>
      <View>
        <View style={styles.iconbar}>
          <View style={styles.iconwtext}>
            <PropButton>
              <Ionicons name="heart-outline" size={24} color="white" />
            </PropButton>
            <Text style={styles.datetext}>{likes}</Text>
          </View>
          <View style={styles.iconwtext}>
            <PropButton>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
            </PropButton>
            <Text style={styles.datetext}>{comments}</Text>
          </View>
          <View style={styles.iconwtext}>
            <PropButton>
              <Ionicons name="repeat-outline" size={24} color="white" />
            </PropButton>
            <Text style={styles.datetext}>{reposts}</Text>
          </View>
          <View style={styles.iconwtext}>
            <PropButton>
              <Ionicons name="paper-plane-outline" size={24} color="white" />
            </PropButton>
            <Text style={styles.datetext}>{shares}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.commenttext}>{postText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: { marginBottom: 16 },
  image: { width: "100%", aspectRatio: 1 },
  iconbar: {
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 10,
    gap: 6,
  },
  iconwtext: {
    flexDirection: "row",
  },
  userinfo: {
    position: "absolute",
    top: "1%",
    left: "3%",
    flexDirection: "row",
  },
  usertext: {
    color: "white",
    fontWeight: "600",
    paddingLeft: 7,
  },
  profilepic: {
    width: 33,
    borderRadius: 14,
    height: 33,
  },
  commenttext: {
    color: "white",
    fontWeight: "300",
    paddingLeft: 7,
  },
  datetext: {
    color: "white",
    fontWeight: "600",
    paddingLeft: 7,
  },
});
