import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";
import { useMeals } from "../../context/MealContext";

export default function MealDetail() {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const { meals } = useMeals();

  const meal = meals.find((m) => m.id === id);

  if (!meal) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Meal not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon="fast-food-outline"
        title="Meal Details"
        subtitle="View information about your selected meal."
        showBackButton
        onBackPress={() => router.back()} // should i use router.push()? here to go back to the previous screen or not? this is stop working when i refresh the page why?
      />

      <View style={styles.card}>
        <Text style={styles.title}>{meal.name}</Text>
        {meal.notes && (
          <Text style={styles.notes}>{meal.notes}</Text>
        )}
        <Text style={styles.type}>
          {meal.type}
        </Text>

        <PrimaryButton
          title="Go Back"
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },

  card: {
    marginTop: 30,
    gap: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  type: {
    fontSize: 20,
    color: "#555",
  },

  notes: {
    fontSize: 16,
    color: "#555",
  },
});