import { View, Text, ImageBackground, Pressable } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppGradient from '@/components/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { Audio } from 'expo-av';
import { AUDIO_FILES, MEDITATION_DATA } from '@/constants/MeditationData';
import { TimerContext } from '@/context/TimerContext';

const meditate = () => {
  const images = [
    require('@/assets/meditation-images/trees.webp'),
    require('@/assets/meditation-images/meditate-under-tree.webp'),
    require('@/assets/meditation-images/river.webp'),
    require('@/assets/meditation-images/beach.webp'),
    require('@/assets/meditation-images/yosemite-stars.webp'),
    require('@/assets/meditation-images/waterfall.webp'),
  ];
  const { id } = useLocalSearchParams();
  const { duration: secondRemaining, setDuration } = useContext(TimerContext);
  // const [secondRemaining, setSecondRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    //Exit
    if (secondRemaining === 0) {
      setIsMeditating(false);
      setIsPlayingAudio(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondRemaining, isMeditating]);
  useEffect(() => {
    return () => {
      setDuration(10);
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const toggleMeditationSessionStatus = async () => {
    if (secondRemaining === 0) setDuration(10);
    setIsMeditating(!isMeditating);
    await toggleSound();
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();
    const status = await sound?.getStatusAsync();
    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync();
      setIsPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setIsPlayingAudio(false);
    }
  };
  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setSound(sound);
    return sound;
  };
  const handleAjustDuration = () => {
    if (isMeditating) toggleMeditationSessionStatus();
    router.push('/modal/adjust-meditaion-duration');
  };

  const formattedTimeMinutes = String(
    Math.floor(secondRemaining / 60)
  ).padStart(2, '0');
  const formattedTimeSeconds = String(secondRemaining % 60).padStart(2, '0');
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        //[Number(id) - 1]
        source={images[1]}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
          <Pressable
            onPress={() => router.back()}
            style={{ position: 'absolute', top: 16, left: 6, zIndex: 10 }}
          >
            <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                marginHorizontal: 'auto',
                backgroundColor: 'white',
                borderRadius: 50,
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: 'red',
                  fontFamily: 'RobotoMono-Regular',
                }}
              >
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <CustomButton
              title={isMeditating ? 'stop' : 'start Meditation'}
              onPress={handleAjustDuration}
              containerStyles={{ marginTop: 'auto', marginBottom: 30 }}
            />
            <CustomButton
              title="Adjust Duration"
              onPress={toggleMeditationSessionStatus}
              containerStyles={{ marginTop: 'auto', marginBottom: 30 }}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default meditate;
