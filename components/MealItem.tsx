import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type MealItemProps = {
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner";
  onPress?: () => void;
};
export default function MealItem({name, type, onPress}: MealItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.typeContainer}>
          <Ionicons name="restaurant-outline" size={16} color="#666" />
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>

      <Pressable style={styles.deleteButton} onPress={onPress}>
        <Ionicons name="trash-outline" size={22} color="#ef4444" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 6,
  },

  type: {
    color: "#666",
    fontSize: 14,
  },

  deleteButton: {
    padding: 8,
  },
});