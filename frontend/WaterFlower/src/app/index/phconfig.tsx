import { Text, View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react'


export default function Home() {
    const [isChecked, setChecked] = useState(false);
    return (
        <ImageBackground source={require('../../../assets/images/BG_3.png')}
            resizeMode="cover"
            style={styles.backgroundImage_select}>
            <StatusBar hidden={true} />
            <View style={styles.baia_menu}>
                <Link href={'../select'}><Image style={{ width: 10, height: 18 }} source={require('../../../assets/icons/back.png')} /></Link>
                <View style={styles.baia_selecionada}>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={styles.baia_name}>Baia 1</Text>
                        <View style={styles.dot_online} />
                    </View>
                    <Text style={styles.baia_ip}>IP: 000.121.123</Text>
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
                    <View style={styles.config_tab2}>
                        <View style={styles.config_tab_color2} />
                        <Image style={styles.backicon} source={require('../../../assets/icons/backalt.png')} />
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.config_icon} source={require('../../../assets/icons/config.png')} />
                            <Text style={styles.config_text2}>Configurações</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={styles.config_text_container}>
                                <Text style={styles.config_text3}>Irrigação automática</Text>
                                <Text style={styles.config_text3}>Horário</Text>
                                <Text style={styles.config_text3}>Duração</Text>
                                <Text style={styles.config_text3}>Nível de umidade</Text>
                                <Text style={styles.config_text3}>Nível IUV</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 17 }}>
                                <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? '#1FAD6F' : undefined} />
                                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/icons/time.png')} />
                                <View style={styles.option_box}>
                                    <Text style={styles.option_box_text}>2 minutos</Text>
                                    <Image style={{ width: 5, height: 10, transform: [{ rotateX: '180deg' }, { rotateZ: '180deg' }] }} source={require('../../../assets/icons/back.png')} />
                                </View>

                                <View style={styles.option_box}>
                                    <Text style={styles.option_box_text}>800-1000</Text>
                                    <Image style={{ width: 5, height: 10, transform: [{ rotateX: '180deg' }, { rotateZ: '180deg' }] }} source={require('../../../assets/icons/back.png')} />
                                </View>

                                <View style={styles.option_box}>
                                    <Text style={styles.option_box_text}>3-5</Text>
                                    <Image style={{ width: 5, height: 10, transform: [{ rotateX: '180deg' }, { rotateZ: '180deg' }] }} source={require('../../../assets/icons/back.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground >
    )
}