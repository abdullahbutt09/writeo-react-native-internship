import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { useState } from "react";
export default function Index() {

  const [username, setUsername] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(""); // this will handle the name because i am using the first state to clear the input

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome 👋</Text>

        <Text style={styles.subtitle}>
          Enter your name below.
        </Text>

        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />

        <Pressable 
        style={styles.button}
        onPress={() => {
        if (username.length < 5) {
          alert("Username must be at least 5 characters long.");
          setUsername("");
          return;
        }
          setIsClicked(true);
          setIsSubmit(username);
          setUsername("");
        }}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        {isClicked && (
          <Text style={styles.greeting}>
            Hello, {isSubmit} 👋
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 6,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 28,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,

    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",

    marginBottom: 18,
  },

  button: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  greeting: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: "700",
    color: "#2563EB",
    textAlign: "center",
  },
});