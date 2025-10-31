import { Text, View, Image, ImageBackground, Modal, Pressable, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';

export default function Home() {
    const [isChecked, setChecked] = useState(false);

    const [duracao, setDuracao] = useState("2 minutos");
    const [umidade, setUmidade] = useState("800-1000");
    const [iuv, setIuv] = useState("3-5");


    const [modalVisible, setModalVisible] = useState<null | "duracao" | "umidade" | "iuv">(null);


    const duracaoOpcoes = ["1 minuto", "2 minutos", "3 minutos", "4 minutos", "5 minutos"];
    const umidadeOpcoes = ["600-800", "800-1000", "1000-1200"];
    const iuvOpcoes = ["1-3", "3-5", "5-7"];

    const renderModal = (tipo: "duracao" | "umidade" | "iuv") => {
        const opcoes =
            tipo === "duracao" ? duracaoOpcoes :
                tipo === "umidade" ? umidadeOpcoes :
                    iuvOpcoes;

        const setValor =
            tipo === "duracao" ? setDuracao :
                tipo === "umidade" ? setUmidade :
                    setIuv;

        return (
            <Modal
                transparent
                visible={modalVisible === tipo}
                animationType="fade"
                onRequestClose={() => setModalVisible(null)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 20,
                        width: 250
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
                            Selecione uma opção
                        </Text>
                        {opcoes.map((opcao) => (
                            <TouchableOpacity
                                key={opcao}
                                onPress={() => {
                                    setValor(opcao);
                                    setModalVisible(null);
                                }}
                                style={{
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ddd'
                                }}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{opcao}</Text>
                            </TouchableOpacity>
                        ))}
                        <Pressable
                            onPress={() => setModalVisible(null)}
                            style={{ marginTop: 10, alignSelf: 'center' }}
                        >
                            <Text style={{ color: '#1FAD6F', fontWeight: 'bold' }}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        );
    };

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
                        <Image style={{ width: 10, height: 18, padding: 5 }} source={require('../../../assets/icons/back.png')} />
                    </Link>
                    <View style={styles.baia_selecionada}>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Text style={styles.baia_name}>Baia 1</Text>
                        </View>
                        <Text style={styles.baia_ip}>IP: 000.121.123</Text>
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
                        <View style={styles.config_tab_color2} />
                        <Link style={styles.backicon} href={'../homepage'}>
                            <Image source={require('../../../assets/icons/backalt.png')} />
                        </Link>

                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.config_icon} source={require('../../../assets/icons/config.png')} />
                            <Text style={styles.config_text2}>Configurações</Text>
                        </View>

                        <View style={styles.config_text_container}>
                            <View style={styles.config_item}>
                                <Text style={styles.config_text3}>Irrigação automática</Text>
                                <Checkbox
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#1FAD6F' : undefined}
                                    style={{ height: 20, width: 20, backgroundColor: '#FFFFFF', borderWidth: 1 }}
                                />
                            </View>

                            <View style={styles.config_item}>
                                <Text style={styles.config_text3}>Duração</Text>
                                <Pressable
                                    style={styles.option_box}
                                    onPress={() => setModalVisible("duracao")}
                                >
                                    <Text style={styles.option_box_text}>{duracao}</Text>
                                    <Image source={require('../../../assets/icons/back.png')} style={styles.config_open_icon} />
                                </Pressable>
                            </View>

                            <View style={styles.config_item}>
                                <Text style={styles.config_text3}>Nível de umidade</Text>
                                <Pressable
                                    style={styles.option_box}
                                    onPress={() => setModalVisible("umidade")}
                                >
                                    <Text style={styles.option_box_text}>{umidade}</Text>
                                    <Image source={require('../../../assets/icons/back.png')} style={styles.config_open_icon} />
                                </Pressable>
                            </View>

                            <View style={styles.config_item}>
                                <Text style={styles.config_text3}>Nível IUV</Text>
                                <Pressable
                                    style={styles.option_box}
                                    onPress={() => setModalVisible("iuv")}
                                >
                                    <Text style={styles.option_box_text}>{iuv}</Text>
                                    <Image source={require('../../../assets/icons/back.png')} style={styles.config_open_icon} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <Text style={styles.watermark}>WaterFlower inc.</Text>

            {renderModal("duracao")}
            {renderModal("umidade")}
            {renderModal("iuv")}
        </ImageBackground>
    );
}