import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { Handbook } from '../../store/handbooks/types';
import { Agent } from '../../store/agent/types';

enum InputLabels {
  agents = 'Контрагенты',
  writeOffType = 'Тип списания',
  fio = 'Ф.И.О ответственного лица',
  date = 'Дата',
  percent = 'Процент скидки',
  currency = 'Валюта',
  paymentType = 'Способ оплаты',
  manager = 'Менеджер',
  comment = 'Прмечание',
  product = 'Список товаров',
  amount = 'Количество',
}

enum PlaceHolders {
  agents = 'Выберите контрагента',
  writeOffType = 'Выберите тип списания',
  fio = 'Введите Ф.И.О ответственного лица',
  date = 'дд.мм.гггг',
  percent = 'Введите Процент скидки',
  currency = 'Выберите валюта',
  paymentType = 'Выберите способ оплаты',
  manager = 'Выберите менеджера',
  comment = 'Введите прмечание',
  product = 'Выберите товар',
  amount = 'Введите количество',
}

interface IProps {
  values: any;
  writeOffTypes: Handbook[];
  products: Handbook[];
  paymentTypes: Handbook[];
  managers: Handbook[];
  currencies: Handbook[];
  agents: Agent[];
  addMore: () => void;
  addNewWriteOff: () => void;
  items: any;
  setWriteOffProductField: (
    index: number,
    fieldName: string,
    value: any,
  ) => void;
  setFormField: (fieldName: string, value: any) => void;
  isWriteOffAddLoading: boolean;
}

export const AddWriteOffModalView = ({
  agents,
  currencies,
  managers,
  paymentTypes,
  products,
  writeOffTypes,
  setFormField,
  addNewWriteOff,
  setWriteOffProductField,
  addMore,
  isWriteOffAddLoading,
  items,
  values,
}: IProps) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Select
          label={InputLabels.agents}
          placeholder={PlaceHolders.agents}
          onValueChange={(value) => setFormField('agent_id', value)}
          options={agents}
          value={values.agent_id}
        />
        <Select
          label={InputLabels.writeOffType}
          placeholder={PlaceHolders.writeOffType}
          onValueChange={(value) => setFormField('type_id', value)}
          options={writeOffTypes}
          value={values.type_id}
        />
        <Input
          label={InputLabels.fio}
          placeholder={PlaceHolders.fio}
          onChangeText={(text) => setFormField('fio', text)}
          value={values.fio}
        />
        <Input
          label={InputLabels.date}
          placeholder={PlaceHolders.date}
          onChangeText={(text) => setFormField('date_writeoff', text)}
          value={values.date_writeoff}
        />
        <Input
          label={InputLabels.percent}
          placeholder={PlaceHolders.percent}
          onChangeText={(text) => setFormField('percentage', text)}
        />
        <Select
          label={InputLabels.currency}
          placeholder={PlaceHolders.currency}
          onValueChange={(value) => setFormField('currency_id', value)}
          options={currencies}
          value={values.currency_id}
        />
        <Select
          label={InputLabels.paymentType}
          placeholder={PlaceHolders.paymentType}
          onValueChange={(value) => setFormField('payment_id', value)}
          options={paymentTypes}
          value={values.payment_id}
        />
        <Select
          label={InputLabels.manager}
          placeholder={PlaceHolders.manager}
          onValueChange={(value) => setFormField('manager_id', value)}
          options={managers}
          value={values.manager_id}
        />
        <Input
          label={InputLabels.comment}
          placeholder={PlaceHolders.comment}
          onChangeText={(text) => setFormField('comment', text)}
        />
        {items.map((item: any, index: number) => {
          const valueSetter = (fieldName: string, value: number | string) =>
            setWriteOffProductField(index, fieldName, value);
          return (
            <View style={styles.rounded} key={index}>
              <Select
                value={item.product}
                options={products}
                onValueChange={(value) => valueSetter('product', value)}
                label={InputLabels.product}
                placeholder={PlaceHolders.product}
              />
              <Input
                label={InputLabels.amount}
                placeholder={PlaceHolders.amount}
                onChangeText={(text) => valueSetter('amount', text)}
              />
            </View>
          );
        })}
        <TouchableOpacity onPress={addMore} style={styles.addMore}>
          <Text style={styles.addMoreText}>+ Добавить еще</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewWriteOff} style={styles.saveWriteOff}>
          {isWriteOffAddLoading ? (
            <ActivityIndicator color={'#fff'} size={'small'} />
          ) : (
            <Text style={styles.saveWriteOffText}>Сохранить</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
