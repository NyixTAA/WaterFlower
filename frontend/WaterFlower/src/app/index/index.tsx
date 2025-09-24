import { Text, View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from 'react-native'

export default function Index() {
    return (
        <ImageBackground source={require('../../../assets/images/BG.png')}
            style={styles.backgroundImage} resizeMode="cover">
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <Image source={require('../../../assets/images/icon.png')} style={styles.flower} resizeMode="contain" />
                <Text style={styles.title}>WaterFlower</Text>
                <Text style={styles.subtitle}>Seu app de controle de irrigação</Text>
                <Text style={styles.brief}>Irrigação automatizada nunca foi tão simples e de fácil acesso.</Text>
                <Link href='./login' style={styles.link}></Link>
            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground>
    )
}