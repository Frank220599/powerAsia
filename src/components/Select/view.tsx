import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import React from 'react';

type Select = {
  label: string;
  placeholder: string;
  onValueChange: (itemValue: number) => void;
  options: {
    id: number | string;
    name: string;
  }[];
  value: any;
};

export const Select = ({
  label,
  value,
  placeholder,
  options,
  onValueChange,
}: Select) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          style={styles.input}
          selectedValue={value}
          onValueChange={onValueChange}>
          <Picker.Item
            label={placeholder}
            value={placeholder}
            color={'#ababab'}
          />
          {options.map((item) => (
            <Picker.Item key={item.name} label={item.name} value={item.id} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
