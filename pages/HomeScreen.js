import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Post from '../components/Post';


const HomeScreen = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://workshop.elyasasmad.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <Post
                        likes={item.data.likes}
                        comments={item.data.comments}
                        reposts={item.data.reposts}
                        name={item.name}
                        username={item.username}
                        photoURL={item.photoURL}
                        createdAt={item.createdAt}
                    >
                        {item.content}
                    </Post>
                )}
                keyExtractor={(item) => item.id}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({})
