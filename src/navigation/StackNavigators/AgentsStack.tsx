import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { AgentsScreen } from '../../screens/AgentsScreen';
import { AgentDetailScreen } from '../../screens/AgentDetailScreen';

export type AgentsStackParamList = {
  [ROUTES.AGENTS]: undefined;
  [ROUTES.AGENT_DETAIL]: { id: number };
};

const { Navigator, Screen } = createStackNavigator<AgentsStackParamList>();

export const AgentsStack = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.AGENTS}
        component={AgentsScreen}
        options={{
          headerTitle: 'Контрагенты',
        }}
      />
      <Screen
        name={ROUTES.AGENT_DETAIL}
        component={AgentDetailScreen}
        options={{
          headerTitle: 'Контрагент детальный.',
        }}
      />
    </Navigator>
  );
};
