import { View, Text, FlatList, Image } from "react-native";
import { styles } from "@/styles/notifications.styles";
import { Ionicons } from "@expo/vector-icons";

const notificationsData = [
  {
    id: "1",
    user: "abhisek",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    action: "liked your post",
    timeAgo: "2h ago",
    postImage:
      "https://images.unsplash.com/photo-1735193862982-40628b025ee8?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "2",
    user: "malla",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    action: "commented: 'Awesome pic!'",
    timeAgo: "5h ago",
    postImage:
      "https://images.unsplash.com/photo-1741484730838-d8cc2e4a9bf4?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <View style={styles.notificationContent}>
              <View style={styles.avatarContainer}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.iconBadge}>
                  <Ionicons name="heart" size={14} color="red" />
                </View>
              </View>
              <View style={styles.notificationInfo}>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.action}>{item.action}</Text>
                <Text style={styles.timeAgo}>{item.timeAgo}</Text>
              </View>
            </View>
            <Image source={{ uri: item.postImage }} style={styles.postImage} />
          </View>
        )}
      />
    </View>
  );
}
