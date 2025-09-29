import { Text, View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar";


export default function Home() {
    return (
        <ImageBackground source={require('../../../assets/images/BG_3.png')}
            resizeMode="cover"
            style={styles.backgroundImage_select}>
            <StatusBar hidden={true} />
            <View style={styles.baia_menu}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Link href={'../select'}><Image style={{ width: 10, height: 18, padding: 5 }} source={require('../../../assets/icons/back.png')} /></Link>
                    <View style={styles.baia_selecionada}>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Text style={styles.baia_name}>Baia 1</Text>
                            <View style={styles.dot_online} />
                        </View>
                        <Text style={styles.baia_ip}>IP: 000.121.123</Text>
                    </View>
                </View>
                <Image style={{ width: 26, height: 32 }} source={require('../../../assets/icons/pot.png')} />
            </View>
            <View style={styles.container_pai_home}>
                <View style={styles.container_flower_home}>
                    <Image
                        source={require('../../../assets/images/icon.png')} style={styles.flower_2} resizeMode='contain'
                    />
                    <Text style={styles.title_home}>Gerencie a <Text style={styles.sub_home}>Baia 1</Text></Text>
                </View>
            </View>
            <View style={styles.tabs_container}>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Link href={'../phconfig'}>
                        <View style={styles.config_tab}>
                            <View style={styles.config_tab_color} />
                            <Image style={styles.config_icon} source={require('../../../assets/icons/config.png')} />
                            <Text style={styles.config_text}>Configurações</Text>
                        </View>
                    </Link>
                    <Link href={'../phsensors'}>
                        <View style={styles.sensor_tab}>
                            <View style={styles.sensor_tab_color} />
                            <Image style={styles.sensor_icon} source={require('../../../assets/icons/sensor.png')} />
                            <Text style={styles.sensor_text}>Sensores</Text>
                        </View>
                    </Link>
                </View>
                <View style={styles.sys_start}>
                    <Text style={styles.start_text}>Iniciar irrigação</Text>
                    <Image style={{ width: 41, height: 44 }} source={require('../../../assets/icons/drops.png')} />
                </View>
            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground >
    )
}