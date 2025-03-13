import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/bookmarks.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

const bookmarks = [
  {
    id: "1",
    title: "Saved Article 1",
    description: "Short description of the saved content.",
    image: require("@/assets/images/bookmark.png"),
  },
  {
    id: "2",
    title: "Saved Article 2",
    description: "Another saved item to revisit later.",
    image: require("@/assets/images/bookmark.png"),
  },
];

export default function Bookmarks() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookmarks</Text>

      {bookmarks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="bookmark-outline" size={64} color={COLORS.gray} />
          <Text style={styles.emptyText}>No bookmarks yet</Text>
        </View>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookmarkCard}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
