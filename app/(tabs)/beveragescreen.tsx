import { useRouter, useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import Add from "@/components/icons/Add";
import { COLORS, FONTS, SIZES } from "@/assets/styles";
import { ICONS, IMAGES } from "@/assets";
import { useCart } from "./cartContext";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const generateUniqueId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random()}`;

interface BeverageProduct {
  id: string;
  name: string;
  image: any;
  price: string;
  description: string;
}

// Beverage product data
const beverageProducts: BeverageProduct[] = [
  {
    id: "1",
    name: "Diet Coke",
    description: "355ml, Price",
    price: "1.99",
    image: IMAGES.Coke,
  },
  {
    id: "2",
    name: "Sprite Can",
    description: "325ml, Price",
    price: "1.50",
    image: IMAGES.Sprite,
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    description: "2L, Price",
    price: "15.99",
    image: IMAGES.AppleJuice,
  },
  {
    id: "4",
    name: "Orange Juice",
    description: "2L, Price",
    price: "15.99",
    image: IMAGES.OrangeJuice,
  },
  {
    id: "5",
    name: "Coca Cola Can",
    description: "325ml, Price",
    price: "4.99",
    image: IMAGES.CanCoke,
  },
  {
    id: "6",
    name: "Pepsi Can",
    description: "330ml, Price",
    price: "4.99",
    image: IMAGES.PepsiCan,
  },
];

// Product card component
interface ProductCardProps {
  item: BeverageProduct;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onPress }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.description,
    });
    router.push("/main/cart");
  };
  return (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={onPress} style={styles.productContent}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productVolume}>
          {item.description}, <Text style={styles.priceLabel}>Price</Text>
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <TouchableOpacity onPress={handleAddToCart} style={styles.addButton}>
            <Add width={47} height={47} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function BeveragesScreen() {
  // Handle navigation to product details
  const handleProductPress = (item: BeverageProduct) => {
    // Create a simplified query string with just the necessary parameters
    // We're not passing the image directly as it can't be serialized properly
    const queryParams = `id=${encodeURIComponent(
      item.id
    )}&name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(
      item.price
    )}&quantity=${encodeURIComponent(item.description)}`;

    router.push(`/productdetail?${queryParams}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={beverageProducts}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => handleProductPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: "#181725",
  },
  filterButton: {
    padding: 5,
  },
  productList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  productRow: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  productCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 15,
    marginBottom: 15,
  },
  productContent: {
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: "#181725",
    textAlign: "center",
    marginBottom: 5,
  },
  productVolume: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 10,
  },
  priceLabel: {
    color: "#7C7C7C",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  productPrice: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: "#181725",
  },
  addButton: {
    backgroundColor: "#53B175",
    width: 45,
    height: 45,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
