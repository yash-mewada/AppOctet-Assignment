import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const products = [
  {
    id: "1",
    name: "Watermelon",
    price: "₹50",
    image: require("../assets/images/watermelon.jpg"),
  },
  {
    id: "2",
    name: "Banana",
    price: "₹20",
    image: require("../assets/images/banana.jpg"),
  },
  {
    id: "3",
    name: "Pineapple",
    price: "₹100",
    image: require("../assets/images/pineapple.jpg"),
  },
  {
    id: "4",
    name: "Cherry",
    price: "₹200",
    image: require("../assets/images/cherry.jpg"),
  },
];

export default function PLP() {
  const [isGridView, setIsGridView] = useState(true);
  const router = useRouter();

  const toggleView = () => setIsGridView(!isGridView);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={isGridView ? styles.gridItem : styles.listItem}
      onPress={() => router.push({ pathname: "/pdp", params: { id: item.id } })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
        <TouchableOpacity onPress={toggleView}>
          <Ionicons
            name={isGridView ? "list" : "grid"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={isGridView ? 2 : 1}
        key={isGridView ? "grid" : "list"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gridItem: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    padding: 16,
  },
  listItem: {
    flexDirection: "row",
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 4,
  },
});
