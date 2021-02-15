import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import styles from './styles';
import { Stock } from '../../store/writeOff/types';
import { Product } from '../../store/product/types';

enum InputLabels {
  fio = 'Ф.И.О',
  date = 'Дата',
  productCount = 'Список товаров',
  price = 'Стоимость',
  count = 'Количество',
  warehouses = 'Склады',
  rackNumber = 'Номер стелажа',
  shelfNumber = 'Shelf number',
}

enum PlaceHolders {
  fio = 'Введите Ф.И.О',
  date = 'дд.мм.гггг',
  productCount = 'Выберите товар',
  price = 'Введите стоимость',
  count = 'Введите количество',
  warehouses = 'Выберите cклад',
  rackNumber = 'Введите номер стелажа',
  shelfNumber = 'Введите номер полки',
}

interface IProps {
  addMore: () => void;
  values: any;
  addNewInventory: () => void;
  items: any;
  stocks: Stock[];
  products: Product[];
  setInventoryProductField: (
    index: number,
    fieldName: string,
    value: any,
  ) => void;
  setFormField: (fieldName: string, value: any) => void;
  isInventoryAddLoading: boolean;
}

export const AddInventoryView = ({
  addMore,
  items,
  products,
  stocks,
  setFormField,
  setInventoryProductField,
  addNewInventory,
  isInventoryAddLoading,
  values,
}: IProps) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rounded}>
          <Text style={styles.heading}>Данные инвентаризации</Text>
          <Input
            onChangeText={(text) => setFormField('fio', text)}
            label={InputLabels.fio}
            placeholder={PlaceHolders.fio}
          />
          <Input
            onChangeText={(text) => setFormField('date_inventory', text)}
            label={InputLabels.date}
            placeholder={PlaceHolders.date}
            value={values.date_inventory}
          />
        </View>
        {items.map((item: any, index: number) => {
          const valueSetter = (fieldName: string, value: string | number) =>
            setInventoryProductField(index, fieldName, value);
          return (
            <View style={styles.rounded} key={index}>
              <Select
                value={item.product}
                options={products}
                onValueChange={(value) => valueSetter('product', value)}
                label={InputLabels.productCount}
                placeholder={PlaceHolders.productCount}
              />
              <Input
                label={InputLabels.price}
                placeholder={PlaceHolders.price}
                onChangeText={(text) => valueSetter('price', text)}
              />
              <Input
                label={InputLabels.count}
                placeholder={PlaceHolders.count}
                onChangeText={(text) => valueSetter('amount', text)}
              />
              <Select
                value={item.stock_id}
                options={stocks}
                label={InputLabels.warehouses}
                placeholder={PlaceHolders.warehouses}
                onValueChange={(value) => valueSetter('stock_id', value)}
              />
              <Input
                label={InputLabels.rackNumber}
                placeholder={PlaceHolders.rackNumber}
                onChangeText={(value) => valueSetter('stack_id', value)}
              />
              <Input
                label={InputLabels.shelfNumber}
                placeholder={PlaceHolders.shelfNumber}
                onChangeText={(value) => valueSetter('shelf_id', value)}
              />
            </View>
          );
        })}
        <TouchableOpacity onPress={addMore} style={styles.addMore}>
          <Text style={styles.addMoreText}>+ Добавить еще</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={addNewInventory}
          style={styles.saveInventory}>
          {isInventoryAddLoading ? (
            <ActivityIndicator color={'#fff'} size={'small'} />
          ) : (
            <Text style={styles.saveInventoryText}>Сохранить</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
