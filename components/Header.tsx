import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>
        Manage your profile information
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#64748B",
  },
});