import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    Button,
    FlatList,
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const image = require("@/assets/images/nectar.png")

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {

    const router = useRouter();

    useEffect(() => {
        // Navigate to WelcomeScreen after 2 seconds
        const timer = setTimeout(() => {
            router.replace("/welcome"); // Ensure the Welcome screen exists
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timeout if component unmounts
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.logoContainer}>
                <Image source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.logoText}>nectar</Text>
                    <Text style={styles.smallText}>online groceries</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#53B175",
        alignItems: "center",
        justifyContent: "center"
    },
    logoContainer: {
        flexDirection: 'row',
        gap: 16,
        alignItems: "center"
    },
    textContainer: {
        flexDirection: "column",
        alignItems: "center",
        width: 194
    },
    logoText: {
        color: "#fff",
        fontSize: 60,
        fontWeight: 700,
    },
    smallText: {
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        color: "#fff",
        marginTop: -10,

    },
    screenContainer: {
        width: width,
        alignItems: "center",
        paddingTop: height * 0.2,
    },
    navigation: {
        flexDirection: "row",
        gap: 6,
    },
    bottomContainer: {
        position: "absolute",
        bottom: height * 0.42,
        width: "100%",
        alignItems: "center",
    },
    active: {
        backgroundColor: "#304FFE",
        width: 16,
        height: 8,
        borderRadius: 19,
    },
    normal: {
        width: 37,
        height: 8,
        borderRadius: 19,
        backgroundColor: "#D0D0D0",
    },
    text: {
        color: "#2A2A2A",
        fontSize: 34,
        fontWeight: 600,
        lineHeight: 41,
        textAlign: "center",
        maxWidth: 350,
        fontFamily: "PoppinsSemiBold",
    },
    mainIcon: {
        height: 260,
        resizeMode: "contain",
        borderRadius: 12,
        marginBottom: 150,
    },
    buttonWrapper: {
        width: "100%",
        paddingBottom: 64,
    },
    button: {
        marginLeft: 17,
        marginRight: 17,
        backgroundColor: "#304FFE",
        borderWidth: 1,
        borderColor: "transparent",
        color: "#fff",
        borderRadius: 50,
        padding: 10,
    },
});
