import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import Logo from '../../assets/logo.png';
import { style } from './styles';
import { themas } from '../../global/themes';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function getLogin() {
    try {
      setLoading(true); // Ativa o estado de carregamento

      if (!email || !password) {
        setLoading(false); // Desativa o carregamento se os campos obrigatórios não estiverem preenchidos
        return Alert.alert('Atenção', 'Informe os campos obrigatórios');
      }

      setTimeout(() => {
        if (email === "nicolau@lalau.com" && password === 'nicolau') {
          Alert.alert('Sucesso', 'Login efetuado com sucesso');
          setEmail('');
          setPassword('');
        } else {
          Alert.alert('Atenção', 'Usuário ou senha inválidos');
        }
        setLoading(false); // Desativa o carregamento após a tentativa de login
      }, 3000);

    } catch (error) {
      console.log(error);
      setLoading(false); // Desativa o carregamento em caso de erro
    }
  }
  return (
    <View style={style.container}>

      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode='contain'
        />
        <Text style={style.text}>Bem vindo de volta</Text>
      </View>

      <View style={style.boxMid}>

        <Text style={style.titleInput}>Endereço de email</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name='email' size={20} color={themas.Colors.gray} />
        </View>


        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons name='lock' size={20} color={themas.Colors.gray} />
        </View>

      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={getLogin}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={style.textBottom}>

        <Text style={style.textBottomCreate}>Não tem conta? Crie agora!</Text>

      </Text>

    </View>
  );
}