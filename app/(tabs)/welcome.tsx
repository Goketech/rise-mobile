import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/Button";

const image = require("@/assets/images/nectar.png");

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
          <Image source={image} style={styles.logo} resizeMode="contain" />
        </View>

        <View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => router.push("/get-started")}
            title="Get Started"
            variant="primary"
          />
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
    marginTop: height - 400,
    padding: 35,
    alignItems: "center",
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
    marginTop: 20,
    margin: 30,
  },
});
