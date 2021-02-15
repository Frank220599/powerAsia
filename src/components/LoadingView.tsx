import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={'#000'} size={'large'} />
    </View>
  );
};

export default LoadingView;
