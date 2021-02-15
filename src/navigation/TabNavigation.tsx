import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../constants/ROUTES';
import {
  PostingsStack,
  PostingsStackParamList,
} from './StackNavigators/PostingsStack';
import {
  AgentsStack,
  AgentsStackParamList,
} from './StackNavigators/AgentsStack';
import {
  WriteOffsStack,
  WriteOffsStackParamList,
} from './StackNavigators/WriteOffsStack';
import {
  InventoryStack,
  InventoryStackParamList,
} from './StackNavigators/InventoryStack';

type TabParamList = {
  [ROUTES.POSTINGS]: PostingsStackParamList;
  [ROUTES.AGENTS]: AgentsStackParamList;
  [ROUTES.WRITE_OFF]: WriteOffsStackParamList;
  [ROUTES.INVENTORY]: InventoryStackParamList;
};

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#1a73e8',
      }}>
      <Screen
        name={ROUTES.POSTINGS}
        component={PostingsStack}
        options={{
          tabBarLabel: 'Оприходование',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={ROUTES.WRITE_OFF}
        component={WriteOffsStack}
        options={{
          tabBarLabel: 'Списание',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={ROUTES.AGENTS}
        component={AgentsStack}
        options={{
          tabBarLabel: 'Контрагенты',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={ROUTES.INVENTORY}
        component={InventoryStack}
        options={{
          tabBarLabel: 'Инвентаризация',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-outline" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
