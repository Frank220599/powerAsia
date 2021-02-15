import { Text, TextInput, View } from 'react-native';
import styles from './styles';
import React from 'react';

type Input = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value?: any;
};

export const Input = ({ label, placeholder, onChangeText, value }: Input) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        value={value}
      />
    </View>
  );
};
