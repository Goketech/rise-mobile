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
import { useState, useRef } from "react";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const flatListRef = useRef<any>(null);

  const screens = [
    {
      image: require("@/assets/images/trust.png"),
      text: "Trusted by millions of people, part of one part",
      buttonText: "Next",
    },
    {
      image: require("@/assets/images/send.png"),
      text: "Spend money abroad, and track your expense",
      buttonText: "Next",
    },
    {
      image: require("@/assets/images/receive.png"),
      text: "Receive Money From Anywhere In The World",
      buttonText: "Get Started",
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenIndex = Math.round(scrollPosition / width);
    setCurrentScreen(screenIndex);
  };

  const scrollToNext = () => {
    if (currentScreen < screens.length - 1) {
      const nextScreen = currentScreen + 1;
      flatListRef.current?.scrollToIndex({
        index: nextScreen,
        animated: true,
      });
      setCurrentScreen(nextScreen);
    }
  };

  const renderItem = ({ item, index }: any) => (
    <View style={styles.screenContainer}>
      <Image source={item.image} style={styles.mainIcon} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const [index, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (index < screens.length - 1) {
      setCurrentIndex(index + 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={screens}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onScroll={handleScroll}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.navigation}>
          {screens.map((_, index) => (
            <View
              key={index}
              style={[styles.normal, currentScreen === index && styles.active]}
            />
          ))}
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button
            onPress={scrollToNext}
            title={screens[currentScreen].buttonText}
            color="#fff"
            accessibilityLabel="next"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
