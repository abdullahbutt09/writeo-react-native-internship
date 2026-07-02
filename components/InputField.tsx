import {
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardTypeOptions;
};

export default function InputField({ placeholder, value, onChangeText, keyboardType }: InputFieldProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#94A3B8"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 54,

    borderWidth: 1,
    borderColor: "#CBD5E1",

    borderRadius: 12,

    paddingHorizontal: 16,

    backgroundColor: "#FFFFFF",

    color: "#0F172A",
    fontSize: 16,

    marginBottom: 16,
  },
});