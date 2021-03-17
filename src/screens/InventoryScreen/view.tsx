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
import { Inventory } from '../../store/inventory/types';

interface IProps {
  inventories: Inventory[];
  openModal: () => void;
  navigateToInventoryDetail: (id: number) => void;
  onRefresh: RefreshControlProps;
}

const renderInventory = (
  inventory: Inventory,
  onPress: (id: number) => void,
) => {
  const color = {
    0: '#fc544b',
    1: '#54ca68',
  };
  return (
    <TouchableOpacity
      onPress={() => onPress(inventory.id)}
      style={styles.inventoryWrapper}>
      <View>
        <Text style={styles.text}>ID: {inventory.id}</Text>
        <Text style={styles.text}>Ф.И.О: {inventory.fio}</Text>
      </View>
      <View>
        <View
          style={[styles.status, { backgroundColor: color[inventory.status] }]}>
          <Text style={{ color: '#fff' }}>
            {inventory.status ? 'Активный' : 'Не Активный'}
          </Text>
        </View>
        <Text>{inventory.date_inventory}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListEmptyComponent = () => (
  <View style={styles.center}>
    <Text>Нет инвентаризаций</Text>
  </View>
);

export const InventoryScreenView = ({
  openModal,
  inventories,
  onRefresh,
  navigateToInventoryDetail,
}: IProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={inventories.length ? {} : { flex: 1 }}
        data={inventories}
        renderItem={({ item }) =>
          renderInventory(item, navigateToInventoryDetail)
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
