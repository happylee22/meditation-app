import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('@/assets/meditation-images/beach.webp')}
        style={{ flex: 1 }}
        resizeMode="contain"
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
        >
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 4,
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingRight: 60,
                  marginTop: 10,
                  fontSize: 20,
                }}
              >
                Simple Meditation
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 15,

                  marginBottom: 10,
                  paddingRight: 60,
                }}
              >
                {' '}
                Simplifying meditation for everyone
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <CustomButton
                onPress={() => console.log('tap')}
                title="Get started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
//
