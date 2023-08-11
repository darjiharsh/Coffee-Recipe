import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';

const AddPostScreen = ({ }) => {
    const { createPost } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleAddPost = () => {
    createPost(title, description, imageURL);
    setTitle('');
    setDescription('');
    setImageURL('');
  };

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <Appbar.Header>
    <Appbar.BackAction onPress={() => goBack()} />
    <Appbar.Content title="Add a New Post" />
  </Appbar.Header>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageURL}
        onChangeText={text => setImageURL(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Button title="Add Post" onPress={handleAddPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AddPostScreen;
