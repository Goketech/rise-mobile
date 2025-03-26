import { Tabs } from "expo-router";
import { Image } from "react-native";
import { COLORS } from "../../assets/styles";
import { ICONS, IMAGES } from "../../assets";

export default function BottomTabs() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const icons: { [key: string]: any } = {
            home: focused ? IMAGES.ShopGreen : IMAGES.ShopBlack,
            explore: focused ? IMAGES.SearchGreen : IMAGES.SearchBlack,
            cart: focused ? IMAGES.CartGreen : IMAGES.CartBlack,
            favorites: focused ? IMAGES.FavoriteGreen : IMAGES.FavoriteBlack,
            account: focused ? IMAGES.AccountGreen : IMAGES.AccountBlack,
          };

          return (
            <Image
              source={icons[route.name]}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          );
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textGray,
        tabBarStyle: {
          backgroundColor: COLORS.bright,
          height: 60,
          paddingBottom: 10,
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Shop" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
    </Tabs>
  );
}
