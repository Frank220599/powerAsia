import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { InventoryScreen } from '../../screens/InventoryScreen';
import { InventoryDetailScreen } from '../../screens/InventoryDetailScreen';

export type InventoryStackParamList = {
  [ROUTES.INVENTORY]: undefined;
  [ROUTES.INVENTORY_DETAIL]: { id: number };
};

const { Navigator, Screen } = createStackNavigator<InventoryStackParamList>();

export const InventoryStack = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.INVENTORY}
        component={InventoryScreen}
        options={{
          headerTitle: 'Инвентеризация',
        }}
      />
      <Screen
        name={ROUTES.INVENTORY_DETAIL}
        component={InventoryDetailScreen}
        options={{
          headerTitle: 'Инвентеризация детальный.',
        }}
      />
    </Navigator>
  );
};
