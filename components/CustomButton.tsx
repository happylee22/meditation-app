import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}
const CustomButton = ({
  onPress,
  title,
  textStyles = '',
  containerStyles = '',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 410,
        width: 300,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={{ fontWeight: 'semibold', fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
