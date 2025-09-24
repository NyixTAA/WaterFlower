import { Text, View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Link } from "expo-router"
import { StatusBar } from 'react-native'

export default function Select() {
    return (
        <ImageBackground source={require('../../../assets/images/BG_2.png')}
            resizeMode="cover"
            style={styles.backgroundImage_select}>
            <StatusBar hidden={true} />
            <View style={styles.container_pai}>
                <View style={styles.container_flower}>
                    <Image
                        source={require('../../../assets/images/icon.png')} style={styles.flower_2} resizeMode='contain'
                    />
                    <Text style={styles.title_select}>Selecione uma baia</Text>

                    <View style={styles.container_select}>
                        <View style={styles.baia1}>
                            <Link href={'../home'}>
                                <View style={styles.baia}>
                                    <Image source={require('../../../assets/icons/baia1.png')} style={styles.bayicon} />
                                    <View style={styles.ins_baia}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                            <Text style={styles.baia_name}>Baia 1</Text>
                                            <View style={styles.dot_online} />
                                        </View>
                                        <Text style={styles.baia_ip}>IP: 000.121.123</Text>
                                    </View>
                                </View>
                            </Link>
                            <View style={styles.edit}>
                                <Image source={require('../../../assets/icons/edit.png')}
                                    style={styles.edit_icon}>
                                </Image>
                            </View>
                        </View>
                        <View style={styles.baia2}>
                            <View style={styles.baia}>
                                <Image source={require('../../../assets/icons/baia2.png')} style={styles.bayicon} />
                                <View style={styles.ins_baia}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                        <Text style={styles.baia_name}>Baia 2</Text>
                                        <View style={styles.dot_offline} />
                                    </View>
                                    <Text style={styles.baia_ip}>IP: 205.513.078</Text>
                                </View>
                            </View>
                            <View style={styles.edit}>
                                <Image source={require('../../../assets/icons/edit.png')}
                                    style={styles.edit_icon}>
                                </Image>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container_add}>
                <View style={styles.addbaia}><Text style={styles.addtext}>Adicionar nova baia</Text></View>
                <View style={styles.addicon}><Image style={styles.plusicon} source={require('../../../assets/icons/add.png')} /></View>
            </View>
            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground >
    )
}