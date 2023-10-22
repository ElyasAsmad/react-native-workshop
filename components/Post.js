import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Post from '../components/Post'

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* <Text>abkkkkkkc</Text> */}
            <View>
                <Image
                    style={styles.image}
                    source={props.photoURL}
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            {/* SHIFT + ALT + F / Command + K + F */}
            <View style={{ flex: 1 }}>
                <View style={[styles.topHeader]}>
                    {/* Hold CTRL + Hover mouse + Click 
    (Jump to specific variable) */}

                    <Text style={[styles.headerText, styles.bold]}>
                        {props.name}
                    </Text>
                    <Text style={[styles.headerText, styles.gray]}>
                        {props.username}
                    </Text>
                    <Text style={[styles.headerText, styles.gray]}>
                        {props.createdAt}
                    </Text>
                </View>
                {/* CTRL + V / Win + V */}
                <Text style={{ flex: 1 }}>
                    {props.children}
                </Text>
                {/* Bottom Buttons */}
                <View style={styles.postActions}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome5 name="comment" size={14} color="#888" />
                        <Text style={styles.buttonText}>
                            {props.comments}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <AntDesign name="retweet" size={14} color="#888" />
                        <Text style={styles.buttonText}>
                            {props.reposts}
                        </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}>
                        <AntDesign name="hearto" size={14} color="#888" />
                        <Text style={styles.buttonText}>
                            {props.likes}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 12, // Space daripada border ke content
        height: 200,
        width: 366,
        marginBottom: 12,
        // backgroundColor: "red",
        borderWidth: 1, // Wajib ada untuk ada border
        borderColor: "#aaaaaa", // Tukar colour
        borderRadius: 16, // Rounded corner
        // justifyContent: 'center', // align x-axis
        // alignItems: 'center', // align y-axis
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    topHeader: {
        flexDirection: "row",
    },
    headerText: {
        // F2
        // ALT + LEFT ARROW (Jump back)
        marginRight: 4,
    },
    bold: {
        fontWeight: "bold",
    },
    gray: {
        color: "#777777",
    },
    postActions: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        flexDirection: "row",
        // Y-AXIS
        alignItems: "center",
        flex: 1,
    },
    buttonText: {
        marginLeft: 4,
        fontSize: 12,
        color: '#888'
    }
});

export default Post;
