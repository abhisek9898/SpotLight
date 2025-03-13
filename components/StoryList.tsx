import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "@/styles/story.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface Story {
  id: string;
  avatar: string;
  username: string;
}

const stories: Story[] = [
  {
    id: "1",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    username: "Your Story",
  },
  {
    id: "2",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "3",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "4",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "5",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "6",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "7",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "8",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "9",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
  {
    id: "10",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "tommy",
  },
];

export default function StoryList() {
  return (
    <View style={styles.storyContainer}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.storyBorder}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              {index === 0 && (
                <View style={styles.addIcon}>
                  <Ionicons name="add" size={18} color={COLORS.white} />
                </View>
              )}
            </View>
            <Text style={styles.username}>
              {item.username.length > 10
                ? item.username.slice(0, 10) + "..."
                : item.username}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
