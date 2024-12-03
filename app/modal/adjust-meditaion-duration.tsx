import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const MeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);
  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Pressable
          onPress={() => router.back()}
          style={{ position: 'absolute', top: 16, left: 6, zIndex: 10 }}
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View style={{ justifyContent: 'center', height: '110%' }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              color: 'white',
              marginBottom: 10,
            }}
          >
            {' '}
            Adjust your meditaion duration
          </Text>
          <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyles={{ marginBottom: 20 }}
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles={{ marginBottom: 20 }}
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyles={{ marginBottom: 20 }}
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles={{ marginBottom: 20 }}
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default MeditationDuration;
