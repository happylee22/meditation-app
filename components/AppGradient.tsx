import { View, Text } from 'react-native';
import React, { Children } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

type Props = {
  children: any;
  colors: [string, string, ...string[]];
};

const AppGradient = ({ children, colors }: Props) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <Content> {children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
