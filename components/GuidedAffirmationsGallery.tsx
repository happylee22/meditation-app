import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <View style={{ marginBottom: 2 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          {title}
        </Text>
      </View>
      <View>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View
                  style={{
                    height: 144,
                    width: 128,
                    borderRadius: 10,
                    marginRight: 5,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
