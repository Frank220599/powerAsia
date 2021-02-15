import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import { ComingProduct, PostingDetail } from '../../store/posting/types';
import { Stock } from '../../store/writeOff/types';
import { Product } from '../../store/product/types';

interface IProps {
  posting: PostingDetail;
  stocks: Stock[];
  products: Product[];
  updatePosting: () => void;
  setSearch: (search: string) => void;
  scan: () => void;
  values: any;
  setPostingProductField: (
    index: number,
    fieldName: string,
    value: string,
  ) => void;
}

interface IPostingProduct {
  product: ComingProduct;
  stocks: Stock[];
  setPostingProductField: (fieldName: string, value: string) => void;
  values: any;
}

const Select = ({ value, options, onValueChange, label }: any) => (
  <Picker
    selectedValue={value}
    style={{ flex: 1 }}
    onValueChange={onValueChange}>
    <Picker.Item label={label} value={''} />
    {options.map((item: any) => (
      <Picker.Item label={item.name} value={item.id} />
    ))}
  </Picker>
);

const PostingProduct = ({
  product,
  stocks,
  setPostingProductField,
  values,
}: IPostingProduct) => {
  return (
    <View style={styles.comingProduct}>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>ID:</Text>
        <Text>{product.product?.id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Товар:</Text>
        <Text>{product.product?.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{ width: '20%' }}>Модель:</Text>
        <Text>{product.product?.model}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Артикул:</Text>
        <Text>{product.product?.article}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{ width: '35%' }}>Склад:</Text>
        <Select
          label={'Укажите склад'}
          options={stocks}
          value={values?.stock ?? product.product?.stock?.id}
          onValueChange={(value: any) => setPostingProductField('stock', value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Стелаж:</Text>
        <TextInput
          placeholder={'Номер стелажа'}
          style={styles.numberInp}
          onChangeText={(value: any) =>
            setPostingProductField('stack_id', value)
          }
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Номер полки:</Text>
        <TextInput
          placeholder={'Номер полки'}
          style={styles.numberInp}
          onChangeText={(value: any) =>
            setPostingProductField('shelf_id', value)
          }
        />
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
        <Text>{product.currency?.name ?? 'Не указана'}</Text>
      </View>
    </View>
  );
};

export const PostingsDetailScreenView = ({
  stocks,
  posting,
  updatePosting,
  setPostingProductField,
  values,
  scan,
  setSearch,
}: IProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topInfo}>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>ID:</Text>
          <Text>{posting.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Тип закупа:</Text>
          <Text>{posting.type}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Тема закупа:</Text>
          <Text>{posting.theme}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Код ТН ВЭД:</Text>
          <Text>{posting.code_ved}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Условия оплаты:</Text>
          <Text>{posting.payment_condition}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Примечание:</Text>
          <Text>{posting.comment}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Статус:</Text>
          <Text>{posting.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.halfWidth}>Дата оприходования:</Text>
          <Text>{posting.date_coming ?? 'Не указана'}</Text>
        </View>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Товары</Text>
        <View style={styles.search}>
          <TextInput
            returnKeyType={'search'}
            style={styles.input}
            placeholder={'поиск'}
            value={values.search}
            onChangeText={setSearch}
          />
          <TouchableOpacity
            onPress={() => {
              if (values.search.length) {
                setSearch('');
              }
            }}
            style={styles.inputIcon}>
            <Ionicons
              name={
                values.search.length === 0 ? 'search-outline' : 'close-outline'
              }
              size={25}
              color={'#000'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={scan} style={styles.searchButton}>
          <Ionicons name={'qr-code-outline'} size={25} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scan} style={styles.searchButton}>
          <Ionicons name={'barcode-outline'} size={25} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        {posting.comingProducts.map((product, index) => {
          if (values.search) {
            const isContains =
              values.products?.[index]?.name
                ?.toLowerCase()
                .indexOf(values.search.toLowerCase()) > -1;
            if (isContains) {
              return (
                <PostingProduct
                  product={product}
                  stocks={stocks}
                  values={values.products?.[index]}
                  setPostingProductField={(fieldName: string, value: any) =>
                    setPostingProductField(index, fieldName, value)
                  }
                />
              );
            } else {
              return null;
            }
          } else {
            return (
              <PostingProduct
                product={product}
                stocks={stocks}
                values={values.products?.[index]}
                setPostingProductField={(fieldName: string, value: any) =>
                  setPostingProductField(index, fieldName, value)
                }
              />
            );
          }
        })}
      </View>
      <Button title={'save'} onPress={updatePosting} />
    </ScrollView>
  );
};
