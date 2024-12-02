import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('@/assets/meditation-images/beach.webp')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView
            style={{
              flex: 1,
              paddingHorizontal: 4,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
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
                }}
              >
                Simplifying meditation for everyone
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <CustomButton
                onPress={() => router.push('/nature-meditate')}
                title="Get started"
                containerStyles={{ marginTop: 'auto', marginBottom: 30 }}
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
