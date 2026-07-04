import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
type HeaderProps = {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  showBackButton?: boolean;
  onBackPress?: () => void;
};

export default function Header({
  title,
  subtitle,
  icon,
  showBackButton,
  onBackPress,
}: HeaderProps) {
  return (
  <View style={styles.container}>
    <View style={styles.topRow}>
      <View style={styles.left}>
          {showBackButton ? (
            <Pressable onPress={onBackPress}>
              <Ionicons
                name="arrow-back"
                size={28}
                color="#2563EB"
              />
            </Pressable>
          ) : (
            <View style={{ width: 28 }} />
          )}
        </View>

  <View style={styles.center}>
    {icon && (
      <Ionicons
        name={icon}
        size={30}
        color="#2563EB"
      />
    )}

    <Text style={styles.title}>{title}</Text>
  </View>

  <View style={{ width: 28 }} />
  </View>
      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
  },

  subtitle: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 15,
    color: "#64748B",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  left: {
    width: 40,
  },

  center: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
})