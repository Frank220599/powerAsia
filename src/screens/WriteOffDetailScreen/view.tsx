import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { WriteOffDetail, WriteOffProduct } from '../../store/writeOff/types';

interface IProps {
  writeOff: WriteOffDetail;
}

const renderProduct = (product: WriteOffProduct) => {
  return (
    <View style={styles.writeOffProduct} key={product.id}>
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
      {/*<View style={styles.row}>*/}
      {/*  <Text style={styles.halfWidth}>Валюта:</Text>*/}
      {/*  <Text>{product.currency?.name ?? 'Не указана'}</Text>*/}
      {/*</View>*/}
    </View>
  );
};

export const WriteOffDetailScreenView = ({ writeOff }: IProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>ID:</Text>
        <Text>ID: {writeOff.id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Агент: </Text>
        <Text>{writeOff.agent.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Ф.И.О: </Text>
        <Text>{writeOff.fio}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Менеджер:</Text>
        <Text>{writeOff.currency?.id}</Text>
        <Text>
          {writeOff.manager?.lastname + ' ' + writeOff.manager?.name ??
            'Не указан'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Валюта:</Text>
        <Text>{writeOff.currency?.name ?? 'Не указана'}</Text>
      </View>
      <Text style={styles.heading}>Товары</Text>
      {writeOff.writeoffProducts.map((product) => renderProduct(product))}
    </ScrollView>
  );
};
