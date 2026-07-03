import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import MealItem from "../components/MealItem";
import MealTypeOption from "../components/MealTypeOption";
import { useState } from "react";

type Meal = {
  id: string;
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner";
};
export default function Index() {
  const [mealType, setMealType] = useState<Meal["type"] | "">("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealName, setMealName] = useState("");

  const [structure, setStructure] = useState({}); // using this variable to check structure of data in prevMeals and ...prevMeals when we append new meal

  const AddMeal = () => {

    if (!mealName.trim() || mealType === "") {
      alert("Please enter a meal name and select a meal type.");
      return;
    }
        
    const newMeal: Meal = {
      id: Date.now().toString(),
      name: mealName.trim(),
      type: mealType,
    };

    // setMeals((prevMeals) => [...prevMeals, newMeal]);
    setMeals((prevMeals) => {
      // console.log("prevMeals ",prevMeals)
      // console.log("spread kar raha hu ",...prevMeals)
      setStructure([prevMeals, newMeal]);
      console.log("structure ", structure)

      return [...prevMeals, newMeal];
    });
    setMealName("");
    setMealType("");
  }

  const deleteMeal = (id: string) => {
    setMeals((prevMeals) => {
      return prevMeals.filter((meal) => meal.id !== id);
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header 
      icon="restaurant-outline"
      title="Meal Tracker" 
      />

      <View style={styles.form}>
        <InputField
          keyboardType="default"
          placeholder="Meal Name"
          value={mealName}
          onChangeText={setMealName}
        />

        <MealTypeOption
          label="Breakfast"
          selected={mealType === "Breakfast"}
          onPress={() => {
            setMealType("Breakfast")
          }}
        />

        <MealTypeOption
          label="Lunch"
          selected={mealType === "Lunch"}
          onPress={() => {
            setMealType("Lunch")
          }}
        />

        <MealTypeOption
          label="Dinner"
          selected={mealType === "Dinner"}
          onPress={() => {
            setMealType("Dinner")
          }}
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
          renderItem={({ item }) => (
          <MealItem
            name={item.name}
            type={item.type}
            onPress={() => deleteMeal(item.id)}
          />
          )} 
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons
                name="fast-food-outline"
                size={60}
                color="#cbd5e1"
              />
              <Text style={styles.emptyTitle}>🍽️ No meals yet</Text>
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