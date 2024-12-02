import { SafeAreaView } from 'react-native';
import React, { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 3 }}>
      {children}
    </SafeAreaView>
  );
};

export default Content;
