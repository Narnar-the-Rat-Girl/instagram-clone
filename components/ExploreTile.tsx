import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

type ExploreTileprops = { image: string; views: string };
const TileSize = Dimensions.get("window").width / 3;
export default function ExploreTile({ image, views }: ExploreTileprops) {
  return (
    <View style={styles.tile}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.views}>
        <Text style={styles.viewtext}>{views}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: { flex: 1, width: "100%", height: "100%", aspectRatio: 1 },
  tile: { width: TileSize, height: TileSize, marginBottom: 16 },
  views: {
    position: "absolute",
    bottom: "1%",
    left: "3%",
    flexDirection: "row",
  },

  viewtext: {
    color: "white",
    fontWeight: "600",
  },
});
