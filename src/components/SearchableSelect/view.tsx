import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { ScanScreen } from '../../screens/ScanScreen/ScanScreen';

type Select = {
  label: string;
  placeholder: string;
  onValueChange: (itemValue: number | string) => void;
  options: {
    id: number | string;
    name: string;
  }[];
  value: any;
};

const Option = ({ name, model, onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text>{name}</Text>
      <Text>{model}</Text>
    </TouchableOpacity>
  );
};

export const SearchableSelect = ({
  label,
  value,
  placeholder,
  options,
  onValueChange,
}: Select) => {
  const [visible, setVisible] = useState(false);
  const [visibleScan, setVisibleScan] = useState(false);
  const [search, setSearch] = useState('');

  const onSuccess = (val: any) => {
    setSearch(val.data);
    setVisibleScan(false);
  };

  return (
    <>
      <ScanScreen
        onSuccess={onSuccess}
        toggleModal={() => setVisibleScan(!visibleScan)}
        visible={visibleScan}
      />
      <Modal
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.backdrop}>
          <View style={styles.wrapper}>
            <View style={styles.top}>
              <View style={styles.search}>
                <TextInput
                  returnKeyType={'search'}
                  style={styles.searchInput}
                  placeholder={'поиск'}
                  value={search}
                  onChangeText={setSearch}
                />
                <TouchableOpacity
                  onPress={() => {
                    if (search.length) {
                      setSearch('');
                    }
                  }}
                  style={styles.inputIcon}>
                  <Ionicons
                    name={
                      search.length === 0 ? 'search-outline' : 'close-outline'
                    }
                    size={25}
                    color={'#000'}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => setVisibleScan(true)}
                style={styles.searchButton}>
                <Ionicons name={'qr-code-outline'} size={25} color={'#fff'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisibleScan(true)}
                style={styles.searchButton}>
                <Ionicons name={'barcode-outline'} size={25} color={'#fff'} />
              </TouchableOpacity>
            </View>
            <FlatList
              keyboardDismissMode={'none'}
              contentContainerStyle={styles.flatList}
              data={options}
              renderItem={({ item }) => {
                const isContains =
                  item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
                if (search) {
                  if (isContains) {
                    return (
                      <Option
                        onPress={() => {
                          setVisible(false);
                          onValueChange(item.id);
                        }}
                        name={item.name}
                        model={item.model}
                      />
                    );
                  } else {
                    return null;
                  }
                } else {
                  return (
                    <Option
                      onPress={() => {
                        setVisible(false);
                        onValueChange(item.id);
                      }}
                      name={item.name}
                      model={item.model}
                    />
                  );
                }
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.input}>
          <Text>
            {value
              ? options.find((item) => item.id === value)?.name
              : placeholder}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
