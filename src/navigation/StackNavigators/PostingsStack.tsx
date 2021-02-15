import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { PostingsScreen } from '../../screens/PostingsScreen';
import { PostingsDetailScreen } from '../../screens/PostingDetailScreen';

export type PostingsStackParamList = {
  [ROUTES.POSTINGS]: undefined;
  [ROUTES.POSTING_DETAIL]: { id: number };
};

const { Navigator, Screen } = createStackNavigator<PostingsStackParamList>();

export const PostingsStack = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.POSTINGS}
        component={PostingsScreen}
        options={{
          headerTitle: 'Оприходование',
        }}
      />
      <Screen
        name={ROUTES.POSTING_DETAIL}
        component={PostingsDetailScreen}
        options={{
          headerTitle: 'Оприходование детально.',
        }}
      />
    </Navigator>
  );
};
