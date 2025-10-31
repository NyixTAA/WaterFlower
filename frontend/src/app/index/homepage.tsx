import { Text, View, Image, ImageBackground, Pressable } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from 'react'

export default function Home() {
    const [ativo, setAtivo] = useState(false);
    return (
        <ImageBackground
            source={require('../../../assets/images/BG_3.png')}
            resizeMode="cover"
            style={styles.backgroundImage_select}
        >
            <StatusBar hidden={true} />
            <View style={styles.baia_menu}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Link href={'../select'}>
                        <Image
                            style={{ width: 10, height: 18, padding: 5 }}
                            source={require('../../../assets/icons/back.png')}
                        />
                    </Link>
                    <View style={styles.baia_selecionada}>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Text style={styles.baia_name}>Baia 1</Text>
                        </View>
                        <Text style={styles.baia_ip}>IP: 000.121.123</Text>
                    </View>
                </View>
                <Image
                    style={{ width: 26, height: 32 }}
                    source={require('../../../assets/icons/pot.png')}
                />
            </View>

            <View style={styles.container_pai_home}>
                <View style={styles.container_flower_home}>
                    <Image
                        source={require('../../../assets/images/icon.png')}
                        style={styles.flower_2}
                        resizeMode='contain'
                    />
                    <Text style={styles.title_home}>
                        Gerencie a <Text style={styles.sub_home}>Baia</Text>
                    </Text>
                </View>
            </View>

            <View style={styles.tabs_container}>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Link href={'../phconfig'}>
                        <View style={styles.config_tab}>
                            <View style={styles.config_tab_color} />
                            <Image
                                style={styles.config_icon}
                                source={require('../../../assets/icons/config.png')}
                            />
                            <Text style={styles.config_text}>Configurações</Text>
                        </View>
                    </Link>

                    <Link href={'../phsensors'}>
                        <View style={styles.sensor_tab}>
                            <View style={styles.sensor_tab_color} />
                            <Image
                                style={styles.sensor_icon}
                                source={require('../../../assets/icons/sensor.png')}
                            />
                            <Text style={styles.sensor_text}>Sensores</Text>
                        </View>
                    </Link>
                </View>

                <Pressable onPress={() => setAtivo(!ativo)}>
                    <View style={ativo ? styles.sys_start2 : styles.sys_start}>
                        <Text style={ativo ? styles.start_text2 : styles.start_text}>
                            {ativo ? 'Irrigando...' : 'Iniciar irrigação'}
                        </Text>
                        <Image
                            style={{ width: 41, height: 44, tintColor: ativo ? '#1E90FF' : '#fff' }}
                            source={require('../../../assets/icons/drops.png')}
                        />
                    </View>
                </Pressable>
            </View>

            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground>
    )
}