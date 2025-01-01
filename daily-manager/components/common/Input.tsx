import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { View, TextInput, Text, StyleSheet } from "react-native";

type KeyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  required: boolean;
  control: Control<T>;
  keyboardType?: KeyboardType;
  error: FieldError | undefined;
};

const Input = <T extends FieldValues>({
  label,
  name,
  required,
  control,
  error,
  keyboardType,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, value } }) => (
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.label}>{label}</Text>
          </View>
          <TextInput
            placeholder={label}
            keyboardType={keyboardType || "default"}
            style={styles.input}
            onChange={onChange}
            value={value}
          />
          {error && <Text style={styles.error}>This field is required</Text>}
        </View>
      )}
      name={name}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 24,
  },

  input: {
    borderWidth: 2,
    borderColor: "#d5d5d5",
    padding: 8,
    borderRadius: 4,
    height: 50,
  },

  label: {
    margin: 0,
    padding: 0,
    gap: 4,
  },

  error: {
    color: "#d11616",
    fontWeight: "bold",
  },
});
