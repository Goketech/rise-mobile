import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TouchableOpacity,
    Button,
    FlatList,
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ImageBackground,
} from "react-native";
import { useState, useRef } from "react";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const image = require("@/assets/images/nectar.png")

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground
                source={require("@/assets/images/background.png")}
                style={styles.imageContainer}
                resizeMode="cover"
            >
                <View style={styles.contentContainer}>
                    <Image
                        source={image}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.title}>to our store</Text>
                    <Text style={styles.subtitle}>
                        Get your groceries in as fast as one hour
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => router.push("/get-started")}>
                        <View style={styles.buttonView}>
                            <Text
                                style={styles.buttonText}
                            >
                                Get Started
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 1,
        width: width,
        height: height,
    },
    logo: {
        width: 48,
        height: 56,
    },

    contentContainer: {
        marginTop: 440,
        padding: 35,
        alignItems: "center",
    },

    buttonView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 48,
        marginBottom: 10,
        color: "white",
        fontFamily: "GilroyBold",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        fontFamily: "Gilroy",
        textAlign: "center",
        color: "#FCFCFCB2",
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    button: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 67,
        backgroundColor: "#55B277",
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 18,
        fontWeight: "600",
        fontFamily: "GilroyBold",
        color: "#FFF9FF",
    },
});