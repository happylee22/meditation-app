import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ImageBackground,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('@/assets/meditation-images/beach.webp')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
        >
          <Text style={{ color: 'white' }}>App</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
//
