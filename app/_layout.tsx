import { Stack } from "expo-router";
import { MealProvider } from "../context/MealContext";

export default function RootLayout() {
  return (
    <MealProvider>
      <Stack
        screenOptions={{ headerShown: false }}
      />
    </MealProvider>
  );
}