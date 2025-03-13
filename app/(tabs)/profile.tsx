import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "@/styles/profile.styles";

const user = {
  username: "abhisek",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  posts: 15,
  followers: 1200,
  following: 500,
  name: "Abhisek",
  bio: "Frontend Developer | React Native Enthusiast",
  postsData: [
    { id: "1", image: "https://source.unsplash.com/random/1" },
    { id: "2", image: "https://source.unsplash.com/random/2" },
    { id: "3", image: "https://source.unsplash.com/random/3" },
    { id: "4", image: "https://source.unsplash.com/random/4" },
    { id: "5", image: "https://source.unsplash.com/random/5" },
  ],
};

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>{user.username}</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Text>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <View style={styles.avatarAndStats}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Name and Bio */}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text>📤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={user.postsData}
        numColumns={3} // Correct way to achieve a grid
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Image source={{ uri: item.image }} style={styles.gridImage} />
          </View>
        )}
      />
    </View>
  );
}
