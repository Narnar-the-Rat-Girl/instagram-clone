import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExploreGride from "../../../components/ExploreTile";
import PropButton from "../../../components/PropButton";
import SearchBar from "../../../components/SearchBar";

export default function Search() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.rowcontainor}>
          <SearchBar></SearchBar>
          <PropButton>
            <Ionicons name="bookmark-outline" size={30} color="white" />
          </PropButton>
        </View>
        <View style={styles.grid}>
          <ExploreGride
            image="https://picsum.photos/seed/post1/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post2/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post3/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post4/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post5/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post6/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post7/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post8/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post9/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post10/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post11/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post12/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post13/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post14/700/700"
            views="1.2m"
          />
          <ExploreGride
            image="https://picsum.photos/seed/post15/700/700"
            views="1.2m"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: { flex: 1 },
  rowcontainor: {
    flexDirection: "row",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
