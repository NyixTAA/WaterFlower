import { Text, View, Image, ImageBackground, TextInput } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { colors } from "../styles/colors"
import { StatusBar } from 'react-native'

export default function Login() {
    return (
        <ImageBackground source={require('../../../assets/images/BG.png')}
            style={styles.backgroundImage} resizeMode="cover">
            <StatusBar hidden={true} />
            <View style={styles.container_id}>
                <Image
                    source={require('../../../assets/images/icon.png')} style={styles.flower} resizeMode="contain"
                />
                <Text style={styles.title_login}>WaterFlower</Text>
            </View>
            <View style={styles.login_container}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    placeholderTextColor={colors.gray[600]}
                    maxLength={42}
                    autoCapitalize="none"
                    autoCorrect={false}
                ></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={colors.gray[600]}
                    secureTextEntry={true}
                    maxLength={50}
                    autoCapitalize="none"
                ></TextInput>

                <Link href='../select' style={styles.button}>LOGIN</Link>
            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground>
    )
}