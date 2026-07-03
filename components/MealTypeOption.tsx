import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type MealTypeOptionProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function MealTypeOption({
  label,
  selected,
  onPress,
}: MealTypeOptionProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons
        name={selected ? "radio-button-on" : "radio-button-off"}
        size={22}
        color="#2563EB"
      />

      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
  },

  label: {
    fontSize: 16,
    color: "#0F172A",
  },
});