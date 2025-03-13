import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "@/styles/create.styles";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "@/constants/theme";

export default function Create() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleShare = () => {
    if (!image) return;
    Alert.alert("Post Shared", "Your post has been shared successfully!");
    setImage(null);
    setCaption("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
        <TouchableOpacity
          style={[styles.shareButton, !image && styles.shareButtonDisabled]}
          onPress={handleShare}
          disabled={!image}
        >
          <Text style={[styles.shareText, !image && styles.shareTextDisabled]}>
            Share
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.imageSection} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <View style={styles.emptyImageContainer}>
              <Ionicons name="images-outline" size={50} color={COLORS.gray} />
              <Text style={styles.emptyImageText}>Tap to select an image</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Caption Input */}
        <View style={styles.inputSection}>
          <View style={styles.captionContainer}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={styles.userAvatar}
            />
            <TextInput
              style={styles.captionInput}
              placeholder="Write a caption..."
              placeholderTextColor={COLORS.gray}
              value={caption}
              onChangeText={setCaption}
              multiline
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
