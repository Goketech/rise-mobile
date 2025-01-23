import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [screen, setScreen] = useState(0);

  const getScreenContent = () => {
    switch (screen) {
      case 0:
        return {
          image: require("@/assets/images/trust.png"),
          text: "Trusted by millions of people, part of one part",
          buttonText: "Next",
        };
      case 1:
        return {
          image: require("@/assets/images/send.png"),
          text: "Spend money abroad, and track your expense",
          buttonText: "Next",
        };
      case 2:
        return {
          image: require("@/assets/images/receive.png"),
          text: "Receive Money From Anywhere In The World",
          buttonText: "Get Started",
        };
      default:
        return {};
    }
  };

  const { image, text, buttonText = "" } = getScreenContent();

  return (
    <View style={styles.conatiner}>
      <Image
        source={image}
        style={styles.mainIcon}
      />

<View style={styles.navigation}>
        <View style={[styles.normal, screen === 0 && styles.active]}></View>
        <View style={[styles.normal, screen === 1 && styles.active]}></View>
        <View style={[styles.normal, screen === 2 && styles.active]}></View>
      </View>

      <View>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>

      <View style={styles.buutonWrraper}>
        <View style={styles.button}>
          <Button
            onPress={() => setScreen((prev) => (prev + 1) % 3)}
            title={buttonText}
            color="#fff"
            accessibilityLabel="next"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 200,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  navigation: {
    marginTop: 88,
    marginBottom: 24,
    flexDirection: "row",
    gap: 6,
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
    maxWidth: 300,
  },
  mainIcon: {
    height: 260,
    resizeMode: "contain",
    borderRadius: 12,
  },
  buutonWrraper: {
    width: "100%",
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
    marginTop: 60,
  },
});
