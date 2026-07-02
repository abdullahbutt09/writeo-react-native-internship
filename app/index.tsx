import { StyleSheet, View, Text } from "react-native";
import { useState } from "react"; 

import Card from "@/components/Card"
import Header from "@/components/Header"
import PrimaryButton from "@/components/PrimaryButton"
import InputField from "@/components/InputField"
export default function Index() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [checking, setChecking] = useState(false)

  const validateData = () => {
    // validate data
    if(name.length < 5) {
      alert("Name must be at least 5 characters long")
      return;
    }

    if(bio.length < 10) {
      alert("Bio must be at least 10 characters long")
      return;
    }

    setChecking(true);
  }

  const editProfile = () => {
    setChecking(false);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Card>
        {checking ? (
          <>
            <Text style={styles.value}>
              <Text style={styles.label}>Name: </Text>
              {name}
            </Text>

            <Text style={styles.value}>
              <Text style={styles.label}>Email: </Text>
              {email}
            </Text>

            <Text style={styles.value}>
              <Text style={styles.label}>Bio: </Text>
              {bio}
            </Text>
          </>
        ) : (
          <>
            <InputField 
              placeholder="Name"
              value={name}
              onChangeText={setName}
              keyboardType="default"
            />
            <InputField 
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <InputField 
              placeholder="Bio"
              onChangeText={setBio}
              value={bio}
              keyboardType="default"
            />
        </>
      )}

      </Card>
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Edit Profile" onPress={editProfile} />
        <PrimaryButton title="Save Profile" onPress={validateData} />
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
    buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12, // Modern React Native supports this
    marginTop: 20,
  },
    label: {
    color: "#ff0000",
    fontWeight: "700",
  },

  value: {
    color: "#0F172A",
    fontSize: 18,
    marginTop: 12,
  },
});