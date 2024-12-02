import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery';

export default function AffirmationsIndex() {
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={['#2e1f58', '#54426b', '#a798af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
            Chanage your belief with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
}
