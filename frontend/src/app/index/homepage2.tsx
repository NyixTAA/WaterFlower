import { Text, View, Image, ImageBackground, Pressable } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from 'react'

export default function Home() {
    const [ativo, setAtivo] = useState(false);
    return (
        <ImageBackground source={require('../../../assets/images/BG_3.png')}
            resizeMode="cover"
            style={styles.backgroundImage_select}>
            <StatusBar hidden={true} />
            <View style={styles.baia_menu}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Link href={'../select'}>
                        <Image style={{ width: 10, height: 18, padding: 5 }} source={require('../../../assets/icons/back.png')} />
                    </Link>
                    <View style={styles.baia_selecionada}>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Text style={styles.baia_name}>Baia 2</Text>
                        </View>
                        <Text style={styles.baia_ip}>IP: 205.513.078</Text>
                    </View>
                </View>
                <Image style={{ width: 26, height: 32 }} source={require('../../../assets/icons/pot.png')} />
            </View>
            <View style={styles.container_pai_home}>
                <View style={styles.container_flower_home}>
                    <Image
                        source={require('../../../assets/images/icon.png')} style={styles.flower_2} resizeMode='contain'
                    />
                    <Text style={styles.title_home}>Gerencie a <Text style={styles.sub_home}>Baia</Text></Text>
                </View>
            </View>
            <View style={styles.tabs_container}>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Link href={'../phconfig2'}>
                        <View style={styles.config_tab}>
                            <View style={styles.config_tab_color} />
                            <Image style={styles.config_icon} source={require('../../../assets/icons/config.png')} />
                            <Text style={styles.config_text}>Configurações</Text>
                        </View>
                    </Link>
                    <Link href={'../phsensors2'}>
                        <View style={styles.sensor_tab}>
                            <View style={styles.sensor_tab_color} />
                            <Image style={styles.sensor_icon} source={require('../../../assets/icons/sensor.png')} />
                            <Text style={styles.sensor_text}>Sensores</Text>
                        </View>
                    </Link>
                </View>
                <Pressable onPress={() => setAtivo(!ativo)}>
                    <View style={ativo ? styles.sys_start3 : styles.sys_start}>
                        <Text style={styles.start_text}>{ativo ? 'A baia está offline...' : 'Iniciar irrigação'}</Text>
                        <Image style={ativo ? { width: 35, height: 35 } : { width: 41, height: 44 }} source={ativo ? require('../../../assets/icons/erro.png') : require('../../../assets/icons/drops.png')} />
                    </View>
                </Pressable>
            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground >
    )
}