import { Text, View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import CheckBox from 'expo-checkbox'
import { Link } from "expo-router"
import { StatusBar } from 'react-native'


export default function Config() {
    const [isChecked, setChecked] = useState(false);

    return (
        <ImageBackground source={require('../../../assets/images/BG_4.png')}
            resizeMode="cover"
            style={styles.backgroundImage_select}>
            <View style={styles.container_pai_config}>
                <View style={styles.container_config}>
                    <Image source={require('../../../assets/images/icon.png')} style={styles.flower_3} resizeMode='contain' />
                    <Text style={styles.title_config}>Configurações</Text>
                </View>
                <View style={styles.config_container}>
                    <View style={styles.config_color} />
                    <Text style={styles.config_title}>Irrigação Automática</Text>
                    <View style={{ gap: 20 }}>
                        <View><CheckBox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#1FAD6F' : undefined} /></View>
                    </View>
                </View>
            </View>

            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground >
    )
}