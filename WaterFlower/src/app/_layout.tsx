import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function App() {
    const [fontsLoaded] = useFonts({
        Rubik: require('../../assets/fonts/Rubik-Regular.ttf'),
        'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Rubik-ExtraBold': require('../../assets/fonts/Rubik-ExtraBold.ttf'),
    });

    if (!fontsLoaded) {
        return <View />;
    }

    return <Slot />;
}