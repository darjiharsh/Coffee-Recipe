import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList  } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  IconButton,
  FAB,
  MD3Colors
} from "react-native-paper";
import styles from "./style";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from '@react-navigation/native';

const PostScreen = ({ }) => {
  const { fetchPosts, fetchUserLikedPosts, updateLikeStatus } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [userLikedPostIds, setUserLikedPostIds] = useState([]);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [offset, setOffset] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await fetchPosts();
        console.log('All Posts:', allPosts);
        setPosts(allPosts);

        const likedPosts = await fetchUserLikedPosts();
        console.log('Liked Posts:', likedPosts);
        setUserLikedPostIds(likedPosts.map(post => post.id));
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };

    loadPosts();
  }, []);

  const handleLikePress = async (postId, liked) => {
    try {
      await updateLikeStatus(postId, liked);
  
      // Update the posts array to reflect the new liked status
      const updatedPosts = posts.map(post =>
        post.id === postId ? { ...post, liked } : post
      );
      setPosts(updatedPosts);
  
      // Update the userLikedPostIds array based on the new liked status
      const updatedLikedPostIds = liked
        ? [...userLikedPostIds, postId]
        : userLikedPostIds.filter(id => id !== postId);
      setUserLikedPostIds(updatedLikedPostIds);
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };
  
  
  const handleFABPress = () => {
    navigation.navigate('AddPost');
  };

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset > 0 && currentOffset > offset) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
    setOffset(currentOffset);
  };

  const renderPostCard = ({ item: post }) => (
    <TouchableOpacity>
      <Card style={styles.card}>
        <View>
          <Card.Cover
            source={{ uri: post.imageUrl }}
            style={styles.cardImage}
          />

          <Title style={styles.title}>{post.title}</Title>

          <View style={styles.costRatingContainer}>
            <View style={styles.leftContent}>
              <Paragraph style={styles.commonStyle}>
                Title: {post.title}
              </Paragraph>
              <Paragraph style={styles.commonStyle}>
                Description: {post.description}
              </Paragraph>
            </View>

            <View style={styles.rightContent}>
              <IconButton
                icon={userLikedPostIds.includes(post.id) ? 'heart' : 'heart-outline'}
                iconColor={userLikedPostIds.includes(post.id) ? MD3Colors.error50 : MD3Colors.secondary50}
                size={20}
                style={styles.likeIcon}
                onPress={() => handleLikePress(post.id, !userLikedPostIds.includes(post.id))}
              />
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Post</Text>

      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={renderPostCard}
        onScroll={handleScroll}
      />

      <FAB
        style={[styles.fab, scrollingUp ? styles.hidden : null]}
        icon="plus"
        onPress={handleFABPress}
      />
    </View>
  );

};

export default PostScreen;
