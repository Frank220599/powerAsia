import React from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import styles from './styles';

enum InputLabels {
  type = 'Тип',
  code = 'Код',
  name = 'Имя',
  fax = 'Факс',
  phone = 'Телефон',
  email = 'E-mail',
  ssid = 'ИНН',
  companyName = 'Название компании',
  realAddress = 'Фактический адрес',
  legalAddress = 'Юридический адрес',
}

enum PlaceHolders {
  type = 'Выберите тип',
  code = 'Введите код',
  name = 'Введите имя',
  fax = 'Введите имя факс',
  phone = 'Введите имя телефон',
  email = 'E-mail',
  ssid = 'Введите имя ИНН',
  companyName = 'Введите имя название компании',
  realAddress = 'Введите имя фактический адрес',
  legalAddress = 'Введите имя юридический адрес',
}

interface IProps {
  setFormField: (fieldName: string, value: any) => void;
  addNewAgent: () => void;
  values: any;
  isAddNewAgentLoading: boolean;
}

export const AddAgentModalView = ({
  values,
  setFormField,
  addNewAgent,
  isAddNewAgentLoading,
}: IProps) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Select
          label={InputLabels.type}
          placeholder={PlaceHolders.type}
          value={values.type}
          onValueChange={(itemValue) => setFormField('type', itemValue)}
          options={[
            { name: 'Внутренний', id: 'in' },
            { name: 'Внешний', id: 'out' },
          ]}
        />
        <Input
          onChangeText={(text) => setFormField('name', text)}
          label={InputLabels.name}
          placeholder={PlaceHolders.name}
        />
        <Input
          onChangeText={(text) => setFormField('code', text)}
          label={InputLabels.code}
          placeholder={PlaceHolders.code}
        />
        <Input
          onChangeText={(text) => setFormField('fax', text)}
          label={InputLabels.fax}
          placeholder={PlaceHolders.fax}
        />
        <Input
          onChangeText={(text) => setFormField('phone', text)}
          label={InputLabels.phone}
          placeholder={PlaceHolders.phone}
        />
        <Input
          onChangeText={(text) => setFormField('email', text)}
          label={InputLabels.email}
          placeholder={PlaceHolders.email}
        />
        <Input
          onChangeText={(text) => setFormField('inn', text)}
          label={InputLabels.ssid}
          placeholder={PlaceHolders.ssid}
        />
        <Input
          onChangeText={(text) => setFormField('company_name', text)}
          label={InputLabels.companyName}
          placeholder={PlaceHolders.companyName}
        />
        <Input
          onChangeText={(text) => setFormField('address_fact', text)}
          label={InputLabels.realAddress}
          placeholder={PlaceHolders.realAddress}
        />
        <Input
          onChangeText={(text) => setFormField('address_law', text)}
          label={InputLabels.legalAddress}
          placeholder={PlaceHolders.legalAddress}
        />
        <TouchableOpacity onPress={addNewAgent} style={styles.saveAgent}>
          {isAddNewAgentLoading ? (
            <ActivityIndicator color={'#fff'} size={'small'} />
          ) : (
            <Text style={styles.saveAgentText}>Сохранить</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
