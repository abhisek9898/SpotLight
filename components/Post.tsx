import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles/feed.styles";
import { Ionicons } from "@expo/vector-icons";

interface PostProps {
  post: {
    avatar: string;
    user: string;
    image: string;
    likes: number;
    caption: string;
    comments: number;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <View style={styles.postContainer}>
      {/* Header */}
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.user}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmark}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={styles.likes}>{post.likes} likes</Text>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={styles.username}>{post.user} </Text>
        {post.caption}
      </Text>

      {/* Comments */}
      <Text style={styles.comments}>View all {post.comments} comments</Text>
    </View>
  );
}
