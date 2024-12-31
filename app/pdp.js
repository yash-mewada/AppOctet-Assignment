import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const products = [
  {
    id: "1",
    name: "Watermelon",
    price: "₹50",
    description:
      "A juicy and refreshing summer fruit, rich in vitamins and hydration.",
    image: require("../assets/images/watermelon.jpg"),
  },
  {
    id: "2",
    name: "Banana",
    price: "₹20",
    description:
      "A sweet and healthy snack, high in potassium and energy-boosting.",
    image: require("../assets/images/banana.jpg"),
  },
  {
    id: "3",
    name: "Pineapple",
    price: "₹100",
    description:
      "A tropical delight with a tangy-sweet flavor, great for digestion.",
    image: require("../assets/images/pineapple.jpg"),
  },
  {
    id: "4",
    name: "Cherry",
    price: "₹200",
    description: "Small and deliciously tart fruit, loaded with antioxidants.",
    image: require("../assets/images/cherry.jpg"),
  },
];

export default function PDP() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) return <Text>Product not found</Text>;

  const handleBuy = () => {
    Alert.alert(
      "Purchase Successful",
      `You have purchased ${product.name} for ${product.price}!`
    );
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 16,
  },
  buyButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  backButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
