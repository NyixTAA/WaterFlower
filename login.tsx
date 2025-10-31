import React, { useState } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Alert, StatusBar } from "react-native";
import { styles } from "./styles";
import { colors } from "../styles/colors";
import { useRouter } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    if (username === "admin" && password === "1234") {
      // redireciona para a tela principal
      router.push("../select");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos!");
    }
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/BG.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar hidden={true} />
      <View style={styles.container_id}>
        <Image
          source={require("../../../assets/images/icon.png")}
          style={styles.flower}
          resizeMode="contain"
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
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors.gray[600]}
          secureTextEntry={true}
          maxLength={50}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.watermark}>WaterFlower inc.</Text>
    </ImageBackground>
  );
}
