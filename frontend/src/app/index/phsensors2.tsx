import { Text, View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ProgressBar } from 'react-native-paper';
import { colors } from '../styles/colors'


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
                            <Text style={styles.baia_name}>Baia 2</Text>
                            <View style={styles.dot_offline} />
                        </View>
                        <Text style={styles.baia_ip}>IP: 205.513.078</Text>
                    </View>
                </View>
                <Image style={{ width: 26, height: 32 }} source={require('../../../assets/icons/pot.png')} />
            </View>
            <View style={styles.container_pai_home}>
                <View style={styles.container_flower_home}>
                    <Image source={require('../../../assets/images/icon.png')} style={styles.flower_2} resizeMode='contain' />
                    <Text style={styles.title_home}>Gerencie a <Text style={styles.sub_home}>Baia 1</Text></Text>
                </View>
            </View>
            <View style={styles.tabs_container}>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    <View style={styles.config_tab2}>
                        <View style={styles.sensor_tab_color2} />
                        <Link style={styles.backicon} href={'../homepage2'}>
                            <Image source={require('../../../assets/icons/backalt.png')} />
                        </Link>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.sensor_icon} source={require('../../../assets/icons/sensor.png')} />
                            <Text style={styles.config_text2}>Sensores</Text>
                        </View>
                        <View style={styles.sensor_tab_container}>
                            <Text style={styles.sensor_tab_container_text}>Sensor de umidade:</Text>
                            <ProgressBar progress={0} color={colors.ui[300]} style={styles.progress_bar} />
                            <Text style={styles.sensor_tab_container_text}>Nível IUV:</Text>
                            <ProgressBar progress={0} color={colors.ui[600]} style={styles.progress_bar} />
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text style={styles.sensor_tab_container_text}>Sensor UV:</Text>
                                <Text style={styles.sensor_status_text_off}>OFFLINE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text style={styles.sensor_tab_container_text}>Sensor de umidade:</Text>
                                <Text style={styles.sensor_status_text_off}>OFFLINE</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.sensor_text_container}>

            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground >
    )
}