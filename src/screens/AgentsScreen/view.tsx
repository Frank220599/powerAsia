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
import { Agent } from '../../store/agent/types';

interface IProps {
  openModal: () => void;
  agents: Agent[];
  navigateToAgentDetail: (id: number) => void;
  onRefresh: RefreshControlProps;
}

const renderAgent = (agent: Agent, onPress: (id: number) => void) => {
  const color = {
    0: '#fc544b',
    1: '#54ca68',
  };
  return (
    <TouchableOpacity
      style={styles.agentWrapper}
      onPress={() => onPress(agent.id)}>
      <View>
        <Text style={styles.text}>ID: {agent.id}</Text>
        <Text style={styles.text}>Имя: {agent.name}</Text>
        <Text style={styles.text}>Код: {agent.code}</Text>
        <Text style={styles.text}>Телефон: {agent.phone}</Text>
        <Text style={styles.text}>E-mail: {agent.email}</Text>
      </View>
      <View style={[styles.status, { backgroundColor: color[agent.status] }]}>
        <Text style={{ color: '#fff' }}>
          {agent.status ? 'Активный' : 'Не Активный'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ListEmptyComponent = () => (
  <View style={{ flex: 1 }}>
    <Text>Нет контрагентов</Text>
  </View>
);

export const AgentsScreenView = ({
  openModal,
  agents,
  navigateToAgentDetail,
  onRefresh,
}: IProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={agents.length ? {} : { flex: 1 }}
        data={agents}
        renderItem={({ item }) => renderAgent(item, navigateToAgentDetail)}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={<RefreshControl {...onRefresh} />}
      />
      <TouchableOpacity onPress={openModal} style={styles.floatingActionButton}>
        <Ionicons name="add" color={'#fff'} size={30} />
      </TouchableOpacity>
    </View>
  );
};
