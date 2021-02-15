import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { Agent } from '../../store/agent/types';

interface IProps {
  agent: Agent;
}

export const AgentDetailScreenView = ({ agent }: IProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>ID:</Text>
        <Text>{agent.id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Имя:</Text>
        <Text>{agent.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Код:</Text>
        <Text>{agent.code}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Телефон:</Text>
        <Text>{agent.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>E-mail:</Text>
        <Text>{agent.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.halfWidth}>Статус:</Text>
        <Text>{agent.status ? 'Активный' : 'Не Активный'}</Text>
      </View>
    </ScrollView>
  );
};
