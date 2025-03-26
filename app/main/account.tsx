import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../assets/styles";
import { IMAGES, ICONS } from "../../assets";

const { width, height } = Dimensions.get("window");

const AccountScreen = () => {
  const options = [
    { id: "orders", label: "Orders", image: ICONS.Order },
    { id: "details", label: "My Details", image: ICONS.Details },
    { id: "address", label: "Delivery Address", image: ICONS.Delivery },
    { id: "payment", label: "Payment Methods", image: ICONS.Payment },
    { id: "promo", label: "Promo Code", image: ICONS.Promo },
    { id: "notifications", label: "Notifications", image: ICONS.Bell },
    { id: "help", label: "Help", image: ICONS.Help },
    { id: "about", label: "About", image: ICONS.About },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={IMAGES.Profile} style={styles.profileImage} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Akanni Adegoke</Text>
          <Text style={styles.userEmail}>modupe775@gmail.com</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {options.map((option) => (
          <View key={option.id} style={styles.optionItem}>
            <View style={styles.optionLeft}>
              {<option.image/>}
              <Text style={styles.optionText}>{option.label}</Text>
            </View>
            <Image
              source={ICONS.ArrowRight}
              style={styles.forwardIcon}
              resizeMode="contain"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Image
            source={ICONS.Logout}
            style={styles.optionIcon}
            resizeMode="contain"
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bright,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: height * 0.02,
    paddingTop: height * 0.08,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  profileImage: {
    width: height * 0.07,
    height: height * 0.07,
    borderRadius: height * 0.035,
    marginRight: width * 0.04,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: SIZES.h2,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
  },
  userEmail: {
    fontSize: SIZES.body,
    fontFamily: FONTS.medium,
    color: COLORS.textGray,
    marginTop: height * 0.005,
  },
  optionsContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.02,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    width: height * 0.03,
    height: height * 0.03,
    marginRight: width * 0.04,
  },
  optionText: {
    fontSize: SIZES.body,
    fontFamily: FONTS.medium,
    color: COLORS.textDark,
    marginLeft: 10
  },
  forwardIcon: {
    width: height * 0.02,
    height: height * 0.02,
    tintColor: COLORS.textGray,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "space-between",
    backgroundColor: COLORS.lightgray,
    paddingVertical: height * 0.02,
    marginTop: height * 0.04,
    borderRadius: height * 0.01,
    marginHorizontal: width * 0.01,
  },
  logoutText: {
    fontSize: SIZES.body,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    marginLeft: width * 0.28,
  },
});

export default AccountScreen;
