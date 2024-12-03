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
  const [sentences, setSentences] = useState<string[]>([]);
  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setaffirmation(affirmationToStart);
        const affirmationArray = affirmationToStart.text.split(',');
        //Remove the last element if it's an empty string
        if (affirmationArray[affirmationArray.length - 1] === '') {
          affirmationArray.pop();
        }
        setSentences(affirmationArray);
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
                {sentences.map((sentences, idx) => (
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 30,
                      marginBottom: 50,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                    key={idx}
                  >
                    {sentences}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
