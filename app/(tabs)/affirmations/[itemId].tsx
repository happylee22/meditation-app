import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setaffirmation] = useState<GalleryPreviewData>();

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setaffirmation(affirmationToStart);
        const affirmationArray = affirmationToStart.text.split(',');
        return;
      }
    }
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
          <Pressable
            onPress={() => router.back()}
            style={{ position: 'absolute', top: 10, left: 24, zIndex: 10 }}
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView
            style={{ marginTop: 80 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ height: '100%', justifyContent: 'center' }}>
              <View style={{ height: '80%', justifyContent: 'center' }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 30,
                    marginBottom: 128,
                    fontWeight: 'bold',
                  }}
                >
                  {affirmation?.text}
                </Text>
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
