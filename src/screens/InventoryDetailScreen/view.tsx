import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { InventoryDetail, InventoryProduct } from '../../store/inventory/types';

interface IProps {
  inventory: InventoryDetail;
}

const renderProduct = (product: InventoryProduct) => {
  return (
    <View style={styles.comingProduct} key={product.id}>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>ID:</Text>
        <Text>{product.id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Товар:</Text>
        <Text>{product.product?.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Артикул:</Text>
        <Text>{product.product?.article}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Склад:</Text>
        <Text>{product.stock?.name ?? 'Не указано'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Кол-во:</Text>
        <Text>{product.amount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Цена:</Text>
        <Text>{product.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Итого:</Text>
        <Text>{product.price_total}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Валюта:</Text>
        <Text>{product.currency ?? 'Не указана'}</Text>
      </View>
    </View>
  );
};

export const InventoryDetailScreenView = ({ inventory }: IProps) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Товары</Text>
      {inventory.inventoryProducts.map((product) => renderProduct(product))}
    </ScrollView>
  );
};
