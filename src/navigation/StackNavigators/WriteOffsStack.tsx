import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { WriteOffsScreen } from '../../screens/WriteOffsScreen';
import { WriteOffDetailScreen } from '../../screens/WriteOffDetailScreen';

export type WriteOffsStackParamList = {
  [ROUTES.WRITE_OFF]: undefined;
  [ROUTES.WRITE_OFF_DETAIL]: { id: number };
};

const { Navigator, Screen } = createStackNavigator<WriteOffsStackParamList>();

export const WriteOffsStack = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.WRITE_OFF}
        component={WriteOffsScreen}
        options={{
          headerTitle: 'Списание',
        }}
      />
      <Screen
        name={ROUTES.WRITE_OFF_DETAIL}
        component={WriteOffDetailScreen}
        options={{
          headerTitle: 'Списание детальный.',
        }}
      />
    </Navigator>
  );
};
