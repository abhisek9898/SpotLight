import React, { useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { styles } from "@/styles/feed.styles";
import Post from "@/components/Post";
import StoryList from "@/components/StoryList";
import { COLORS } from "@/constants/theme";

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      user: "abhisek",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      image:
        "https://images.unsplash.com/photo-1735193862982-40628b025ee8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 125,
      caption: "Enjoying the view!",
      comments: 10,
    },
    {
      id: "2",
      user: "malla",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      image:
        "https://images.unsplash.com/photo-1741484730838-d8cc2e4a9bf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 342,
      caption: "#SunsetMagic",
      comments: 28,
    },
  ]);

  const [loading, setLoading] = useState(false);

  const loadMorePosts = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const newPosts = [
        {
          id: Math.random().toString(),
          user: "new_user",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          image:
            "https://images.unsplash.com/photo-1741484730838-d8cc2e4a9bf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          likes: 200,
          caption: "New post added!",
          comments: 15,
        },
      ];
      setPosts([...posts, ...newPosts]);
      setLoading(false);
    }, 2000); // Simulating API delay
  };

  return (
    <View style={styles.container}>
      <StoryList />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : null
        }
        initialNumToRender={5}
        windowSize={10}
        getItemLayout={(data, index) => ({
          length: 600,
          offset: 600 * index,
          index,
        })}
        removeClippedSubviews={true}
        legacyImplementation={false}
      />
    </View>
  );
}
