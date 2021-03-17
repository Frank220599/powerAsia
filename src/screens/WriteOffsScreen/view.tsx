import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  RefreshControlProps,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { WriteOff } from '../../store/writeOff/types';

interface IProps {
  writeOffs: WriteOff[];
  openModal: () => void;
  navigateToWriteOffDetail: (id: number) => void;
  onRefresh: RefreshControlProps;
}

const renderWriteOff = (writeOff: WriteOff, onPress: (id: number) => void) => {
  const color = {
    0: '#fc544b',
    1: '#54ca68',
  };
  return (
    <TouchableOpacity
      onPress={() => onPress(writeOff.id)}
      style={styles.writeOffWrapper}>
      <View>
        <Text style={styles.text}>ID: {writeOff.id}</Text>
        <Text style={styles.text}>Код ТН ВЭД: {writeOff.id}</Text>
        <Text style={styles.text}>Агент: {writeOff.agent.name}</Text>
        <Text style={styles.text}>
          Менеджер: {writeOff.manager?.lastname ?? 'Не указан'}
        </Text>
        <Text style={styles.text}>Ф.И.О: {writeOff.fio}</Text>
      </View>
      <View>
        <View
          style={[styles.status, { backgroundColor: color[writeOff.status] }]}>
          <Text style={{ color: '#fff' }}>
            {writeOff.status ? 'Активный' : 'Не Активный'}
          </Text>
        </View>
        <Text>{writeOff.date_writeoff}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListEmptyComponent = () => (
  <View style={{ flex: 1 }}>
    <Text>Нет контрагентов</Text>
  </View>
);

export const WriteOffsScreenView = ({
  openModal,
  writeOffs,
  navigateToWriteOffDetail,
  onRefresh,
}: IProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={writeOffs}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={writeOffs.length ? {} : { flex: 1 }}
        renderItem={({ item }) =>
          renderWriteOff(item, navigateToWriteOffDetail)
        }
        keyExtractor={(item) => item.id.toString()}
        refreshControl={<RefreshControl {...onRefresh} />}
      />
      <TouchableOpacity onPress={openModal} style={styles.floatingActionButton}>
        <Ionicons name="add" color={'#fff'} size={30} />
      </TouchableOpacity>
    </View>
  );
};
