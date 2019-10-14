import * as React from 'react';
import { View, Text } from 'react-native';

export default () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    }}>
    <Text style={{ textAlign: 'center' }}>
      This isn't supported on web! Switch to iOS or Android
    </Text>
  </View>
);
