import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Card, IconButton, Avatar, MD3Colors } from 'react-native-paper';
import styles from "./style";
import { AuthContext } from "../contexts/AuthContext";

const LikePage = () => {
  const { fetchUserLikedPosts, updateLikeStatus } = useContext(AuthContext);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const likedPosts = await fetchUserLikedPosts();
      setLikedPosts(likedPosts);
      console.log("liked posts:", likedPosts);
    } catch (error) {
      console.error("Error fetching liked posts:", error);
    }
  };

  const handleLikePress = async (postId, liked) => {
    try {
      await updateLikeStatus(postId, liked);
      // Update the liked status in the UI by refetching liked posts
      fetchData();
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const renderCustomCard = ({ item }) => {
    return (
      <CustomCard
        post={item}
        onLikePress={(postId, liked) => handleLikePress(postId, liked)}
      />
    );
  };

  const CustomCard = ({ post, onLikePress }) => {
    return (
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            <Avatar.Image source={{ uri: post.imageUrl }} size={60} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{post.title}</Text>
          </View>
          <View style={styles.iconContainer}>
            <IconButton
              icon={post.liked ? 'heart' : 'heart-outline'}
              iconColor={post.liked ? MD3Colors.error50 : MD3Colors.secondary50}
              size={20}
              onPress={() => onLikePress(post.id, !post.liked)}
            />
          </View>
        </View>
      </Card>
    );
  };

  return (
    <FlatList
      data={likedPosts}
      keyExtractor={item => item.id.toString()}
      renderItem={renderCustomCard}
    />
  );
};

export default LikePage;