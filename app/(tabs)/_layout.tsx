import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const TabsLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
          }}
        >
          <Tabs.Screen
            name="nature-meditate"
            options={{
              tabBarLabel: 'Meditate',
              tabBarIcon: ({}) => (
                <MaterialCommunityIcons name="flower-tulip" size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="affirmations"
            options={{
              tabBarLabel: 'Affirmations',
              tabBarIcon: ({}) => (
                <Entypo name="open-book" size={24} color={Colors.primary} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
};

export default TabsLayout;
