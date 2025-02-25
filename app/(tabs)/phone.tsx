import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import BackSvg from "@/components/icons/Back";
import Continue from "@/components/icons/Continue";
import CountryPicker from "react-native-country-picker-modal";
import CountryFlag from "react-native-country-flag";
import Next from "@/components/Next";

const { width, height } = Dimensions.get("window");
export default function Phone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("BD"); // Default country
  const [callingCode, setCallingCode] = useState("880");
  const [visible, setVisible] = useState(false);

  const handleContinue = () => {
    // Add phone number validation logic here
    router.push("/otp");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ backgroundColor: "#fcfcfc" }}>
        <ImageBackground
          source={require("@/assets/images/blur.png")}
          style={styles.background}
        >
          <View>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.goBack}
            >
              <BackSvg width={100} height={100} fill="#181725" />
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.title}>Enter your mobile number</Text>
              <Text style={styles.subtitle}>Mobile number </Text>

              <View style={styles.inputContainer}>
                <TouchableOpacity
                  onPress={() => setVisible(true)}
                  style={styles.countrySelector}
                >
                  <CountryFlag isoCode={countryCode.toLowerCase()} size={25} />
                  <Text style={styles.countryCodeText}>+{callingCode}</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>

              <Next onPress={handleContinue} />
            </View>
          </View>
        </ImageBackground>
        <CountryPicker
          visible={visible}
          withFlag
          withCallingCode
          withFilter
          withAlphaFilter
          withEmoji
          onClose={() => setVisible(false)}
          onSelect={(country) => {
            setCountryCode(country.cca2);
            setCallingCode(country.callingCode[0]);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  goBack: { padding: 25, position: "absolute", top: 40, left: 10, zIndex: 2 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    // backgroundColor: "#fcfcfc",
    marginTop: 120,
    padding: 20,
    zIndex: 0,
    // height: '100%'
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    fontFamily: "GilroyMedium",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    fontFamily: "GilroyMedium",
  },
  input: {
    flex: 1,
    // backgroundColor: "#fcfcfc",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  countrySelector: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  countryCode: {
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "center",
  },
  countryCodeText: {
    fontSize: 16,
    color: "#333",
    borderRightWidth: 1,
    borderLeftColor: "#7C7C7C",
    paddingRight: 10,
    marginLeft: 5,
  },
});
