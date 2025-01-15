import React from "react";
import {
  StyleSheet,
  Image,
  Platform,
  Alert,
  Button,
  View,
  Text,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as LocalAuthentication from 'expo-local-authentication';

export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isLoogggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const useFaceID = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert("No hardware support");
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert("No face ID enrolled");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setIsLoggedIn(true);
    } else {
      Alert.alert("Failed to authenticate");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/rise-logo.png")}
        style={styles.tinyLogo}
      />
      {/* </View> */}
      {isLoogggedIn ? (
        <View>
          <View style={styles.introText}>
            <Text style={styles.headerText}>
              Welcome to <Text style={styles.specialText}>Rise</Text>
            </Text>
            <Text>Where your investments rise</Text>
          </View>
          <View style={styles.loggedIn}>
            <Text>Welcome Back {text || "user"}!</Text>
            <Text>Your password is {password}</Text>
            <View style={styles.logout}>
              <Button
                onPress={() => setIsLoggedIn(false)}
                title="Logout"
                color="#fff"
                accessibilityLabel="Login out from Rise platform"
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.full}>
          <View style={styles.introText}>
            <Text style={styles.headerText}>
              Login to <Text style={styles.specialText}>Rise</Text>
            </Text>
            <Text>Let your investments rise</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Username"
              placeholderTextColor="#000"
              textContentType="username"
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#000"
              textContentType="password"
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonVariant}>
              <MaterialCommunityIcons
                name="face-recognition"
                size={24}
                color="black"
              />
              <Button
                onPress={useFaceID}
                title="Face ID"
                color="#000"
                accessibilityLabel="Login with face id"
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={login}
                title="Login"
                color="#fff"
                accessibilityLabel="Login into Rise platform"
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDFEC",
    alignItems: "center",
    padding: 20,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 40,
  },

  miniText: {
    fontSize: 12,
  },

  tinyLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  input: {
    height: 60,
    marginBottom: 20,
    padding: 10,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },

  text: {
    color: "#fff",
  },

  specialText: {
    color: "#0698a0",
  },

  introText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },

  full: {
    width: "100%",
  },

  loggedIn: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 60,
    textAlign: "center",
  },

  inputContainer: {
    marginTop: 80,
    width: "100%",
  },

  button: {
    flex: 1,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "transparent",
    color: "#fff",
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  logout: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "transparent",
    color: "#fff",
    borderRadius: 15,
    padding: 10,
    marginTop: 60,
  },

  buttonVariant: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "transparent",
    color: "#000",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
});
