import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

import Header from "../components/Header";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import MealItem from "../components/MealItem";
import MealTypeOption from "../components/MealTypeOption";
import { useMeals } from "../context/MealContext";

type MealType = "Breakfast" | "Lunch" | "Dinner";

export default function Meals() {
  const router = useRouter();

  const { meals, addMeal, deleteMeal } = useMeals();

  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState<MealType | "">("");
  const [mealNotes, setMealNotes] = useState("");

  const AddMeal = () => {
    if (!mealName.trim() || mealType === "") {
      alert("Please enter a meal name and select a meal type.");
      return;
    }

    addMeal({
      name: mealName.trim(),
      type: mealType,
      notes: mealNotes.trim() || undefined,
    });

    setMealName("");
    setMealType("");
    setMealNotes("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon="list-outline"
        title="Meals"
        subtitle="Browse, add or remove your meals."
        showBackButton
        onBackPress={() => router.back()}
      />

      <View style={styles.form}>
        <InputField
          keyboardType="default"
          placeholder="Meal Name"
          value={mealName}
          onChangeText={setMealName}
        />
        
        <InputField
          keyboardType="default"
          placeholder="Meal Notes Optional"
          value={mealNotes}
          onChangeText={setMealNotes}
        />

        <MealTypeOption
          label="Breakfast"
          selected={mealType === "Breakfast"}
          onPress={() => setMealType("Breakfast")}
        />

        <MealTypeOption
          label="Lunch"
          selected={mealType === "Lunch"}
          onPress={() => setMealType("Lunch")}
        />

        <MealTypeOption
          label="Dinner"
          selected={mealType === "Dinner"}
          onPress={() => setMealType("Dinner")}
        />

        <PrimaryButton
          title="Add Meal"
          onPress={AddMeal}
        />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.heading}>Meals</Text>

        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealItem
              name={item.name}
              type={item.type}
              notes={item.notes}
              onPress={() =>
                router.push({
                  pathname: "/meal/[id]",
                  params: {
                    id: item.id,
                  },
                })
              }
              onDelete={() => deleteMeal(item.id)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons
                name="fast-food-outline"
                size={60}
                color="#cbd5e1"
              />

              <Text style={styles.emptyTitle}>
                🍽️ No meals yet
              </Text>

              <Text style={styles.emptySubtitle}>
                Add your first meal above.
              </Text>
            </View>
          }
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

  form: {
    marginTop: 20,
    gap: 16,
  },

  listContainer: {
    flex: 1,
    marginTop: 24,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },

  emptyContainer: {
    marginTop: 60,
    alignItems: "center",
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  emptySubtitle: {
    marginTop: 8,
    color: "#777",
  },
});