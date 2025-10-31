import { Text, View, Image, ImageBackground, Pressable, TextInput } from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";
import { StatusBar } from 'react-native';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Select() {
    const [baia1, setBaia1] = useState({ nome: "Baia 1", ip: "000.121.123" });
    const [baia2, setBaia2] = useState({ nome: "Baia 2", ip: "205.513.078" });

    const [editando, setEditando] = useState<null | 1 | 2>(null);
    const [tempNome, setTempNome] = useState("");
    const [tempIp, setTempIp] = useState("");

    function iniciarEdicao(baiaNumber: 1 | 2) {
        setEditando(baiaNumber);
        if (baiaNumber === 1) {
            setTempNome(baia1.nome);
            setTempIp(baia1.ip);
        } else {
            setTempNome(baia2.nome);
            setTempIp(baia2.ip);
        }
    }

    async function salvarEdicao() {
        if (editando === 1) {
            const novo = { nome: tempNome, ip: tempIp };
            setBaia1(novo);
            await AsyncStorage.setItem("baia1", JSON.stringify(novo));
        } else if (editando === 2) {
            const novo = { nome: tempNome, ip: tempIp };
            setBaia2(novo);
            await AsyncStorage.setItem("baia2", JSON.stringify(novo));
        }
        setEditando(null);
    }

    return (
        <ImageBackground source={require('../../../assets/images/BG_2.png')} resizeMode="cover" style={styles.backgroundImage_select}>
            <StatusBar hidden={true} />

            <View style={styles.container_pai}>
                <View style={styles.container_flower}>
                    <Image source={require('../../../assets/images/icon.png')} style={styles.flower_2} resizeMode='contain' />
                    <Text style={styles.title_select}>Selecione uma baia</Text>

                    <View style={styles.container_select}>


                        {editando !== 1 ? (
                            <View style={styles.baia1}>
                                <Link href={'../homepage'}>
                                    <View style={styles.baia}>
                                        <Image source={require('../../../assets/icons/baia1.png')} style={styles.bayicon} />
                                        <View style={styles.ins_baia}>
                                            <Text style={styles.baia_name}>{baia1.nome}</Text>
                                            <Text style={styles.baia_ip}>IP: {baia1.ip}</Text>
                                        </View>
                                    </View>
                                </Link>

                                <Pressable style={styles.edit} onPress={() => iniciarEdicao(1)}>
                                    <Image source={require('../../../assets/icons/edit.png')} style={styles.editIcon} />
                                </Pressable>
                            </View>
                        ) : (
                            <View style={styles.editContainer}>
                                <View style={styles.editBox}>
                                    <Image source={require('../../../assets/icons/baia1.png')} style={styles.bayicon} />
                                    <View style={styles.ins_baia}>
                                        <Text style={styles.baia_name}>{tempNome}</Text>
                                        <Text style={styles.baia_ip}>IP: {tempIp}</Text>
                                    </View>

                                    <View style={styles.editFields}>
                                        <TextInput style={styles.editInput} value={tempNome} onChangeText={setTempNome} placeholder="Nome da Baia" />
                                        <TextInput style={styles.editInput} value={tempIp} onChangeText={setTempIp} placeholder="IP da Baia" />
                                    </View>
                                </View>

                                <View style={styles.confirmCancel}>
                                    <Pressable onPress={salvarEdicao}>
                                        <Image source={require('../../../assets/icons/confirm.png')} style={styles.confirmImg} />
                                    </Pressable>

                                    <Pressable onPress={() => setEditando(null)}>
                                        <Image source={require('../../../assets/icons/close.png')} style={styles.closeImg} />
                                    </Pressable>
                                </View>
                            </View>
                        )}


                        {editando !== 2 ? (
                            <View style={styles.baia2}>
                                <Link href={'../homepage2'}>
                                    <View style={styles.baia}>
                                        <Image source={require('../../../assets/icons/baia2.png')} style={styles.bayicon} />
                                        <View style={styles.ins_baia}>
                                            <Text style={styles.baia_name}>{baia2.nome}</Text>
                                            <Text style={styles.baia_ip}>IP: {baia2.ip}</Text>
                                        </View>
                                    </View>
                                </Link>

                                <Pressable style={styles.edit} onPress={() => iniciarEdicao(2)}>
                                    <Image source={require('../../../assets/icons/edit.png')} style={styles.editIcon} />
                                </Pressable>
                            </View>
                        ) : (
                            <View style={styles.editContainer}>
                                <View style={styles.editBox}>
                                    <Image source={require('../../../assets/icons/baia2.png')} style={styles.bayicon} />
                                    <View style={styles.ins_baia}>
                                        <Text style={styles.baia_name}>{tempNome}</Text>
                                        <Text style={styles.baia_ip}>IP: {tempIp}</Text>
                                    </View>

                                    <View style={styles.editFields}>
                                        <TextInput style={styles.editInput} value={tempNome} onChangeText={setTempNome} placeholder="Nome da Baia" />
                                        <TextInput style={styles.editInput} value={tempIp} onChangeText={setTempIp} placeholder="IP da Baia" />
                                    </View>
                                </View>

                                <View style={styles.confirmCancel}>
                                    <Pressable onPress={salvarEdicao}>
                                        <Image source={require('../../../assets/icons/confirm.png')} style={styles.confirmImg} />
                                    </Pressable>

                                    <Pressable onPress={() => setEditando(null)}>
                                        <Image source={require('../../../assets/icons/close.png')} style={styles.closeImg} />
                                    </Pressable>
                                </View>
                            </View>
                        )}

                    </View>
                </View>
            </View>


            <View style={styles.container_add}>
                <View style={styles.addbaia}><Text style={styles.addtext}>Adicionar nova baia</Text></View>
                <View style={styles.addicon}><Image style={styles.plusicon} source={require('../../../assets/icons/add.png')} /></View>
            </View>

            <Link style={styles.absoluteBackIcon} href={'../login'}>
                <Image source={require('../../../assets/icons/backalt.png')}/>
            </Link>

            <Text style={styles.watermark}>WaterFlower inc.</Text>
        </ImageBackground>
    );
}