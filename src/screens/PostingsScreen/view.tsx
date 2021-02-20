import React from 'react';
import {
  FlatList,
  RefreshControl,
  RefreshControlProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { Posting } from '../../store/posting/types';

const STATUSES: any = {
  0: 'Не оприходован',
  1: 'Оприходован',
  2: 'Частично',
};

interface IProps {
  posting: Posting[];
  navigateToPostingDetail: (id: number) => void;
  onRefresh: RefreshControlProps;
}

const renderPosting = (posting: Posting, onPress: (id: number) => void) => {
  const color = {
    0: '#fc544b',
    1: '#54ca68',
    2: '#ffc107',
  };
  return (
    <TouchableOpacity
      onPress={() => onPress(posting.id)}
      style={styles.postingWrapper}>
      <View>
        <Text style={styles.text}>ID: {posting.id}</Text>
        <Text style={styles.text}>Код ТН ВЭД: {posting.code_ved}</Text>
      </View>
      <View>
        <View
          style={[styles.status, { backgroundColor: color[posting.status] }]}>
          <Text style={{ color: '#fff' }}>{STATUSES[posting.status]}</Text>
        </View>
        <Text>{posting.date_coming}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListEmptyComponent = () => (
  <View style={styles.center}>
    <Text>Нет оприходований</Text>
  </View>
);

export const PostingsScreenView = ({
  posting,
  navigateToPostingDetail,
  onRefresh,
}: IProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posting}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={posting.length ? {} : { flex: 1 }}
        renderItem={({ item }) => renderPosting(item, navigateToPostingDetail)}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={<RefreshControl {...onRefresh} />}
      />
    </View>
  );
};
