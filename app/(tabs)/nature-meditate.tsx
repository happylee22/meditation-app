import { View, Text, Pressable, ImageBackground, FlatList } from 'react-native';
import React, { Children } from 'react';
import AppGradient from '@/components/AppGradient';
import { StatusBar } from 'expo-status-bar';

import { MEDITATION_DATA } from '@/constants/MeditationData';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const natureMeditate = () => {
  const images = [
    require('@/assets/meditation-images/trees.webp'),
    require('@/assets/meditation-images/meditate-under-tree.webp'),
    require('@/assets/meditation-images/river.webp'),
    require('@/assets/meditation-images/beach.webp'),
    require('@/assets/meditation-images/yosemite-stars.webp'),
    require('@/assets/meditation-images/waterfall.webp'),
  ];
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <View style={{ marginBottom: 6 }}>
          <Text
            style={{
              color: 'white',
              marginBottom: 3,
              fontWeight: 'bold',
              fontSize: 25,
              textAlign: 'left',
            }}
          >
            Welcome steven
          </Text>
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: 'medium',
              color: 'white',
              fontSize: 15,
            }}
          >
            Start your meditation prectice today!
          </Text>
        </View>

        <View>
          <FlatList
            data={MEDITATION_DATA}
            style={{ marginBottom: 20 }}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push('/meditate/[id]')}
                style={{
                  height: 130,
                  marginHorizontal: 9,
                  borderRadius: 5,
                  overflow: 'hidden',
                }}
              >
                <ImageBackground
                  source={images[item.id - 1]}
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default natureMeditate;
