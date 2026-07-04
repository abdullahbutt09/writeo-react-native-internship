import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import PrimaryButton from "../components/PrimaryButton";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon="restaurant-outline"
        title="Meal Tracker"
        subtitle="Track, manage and explore your meals easily."
      />
      
      <View style={styles.hero}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="restaurant"
            size={70}
            color="#fff"
          />
        </View>

        <Text style={styles.title}>Meal Tracker</Text>

        <Text style={styles.subtitle}>
          Organize your meals, explore your food history,
          and keep everything in one place.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ready to start?</Text>

        <Text style={styles.cardText}>
          Add meals, browse your collection and view
          detailed information about every meal.
        </Text>

        <PrimaryButton
          title="View Meals 🍽️"
          onPress={() => router.push("/meals")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
    justifyContent: "space-between",
  },

  hero: {
    marginTop: 40,
    alignItems: "center",
  },

  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  title: {
    marginTop: 25,
    fontSize: 34,
    fontWeight: "bold",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    color: "#64748b",
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    elevation: 5,
    marginBottom: 30,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 15,
    color: "#64748b",
    lineHeight: 24,
    marginBottom: 25,
  },
});