import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState({ value: '' })
  const [password, setPassword] = useState({ value: '' })

  const onLoginPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Login Page</Header>
      <TextInput
        label="Mobile"
        returnKeyType="next"
        value={mobile.value}
        onChangeText={(text) => setMobile({ value: text })}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text })}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
    </Background>
  );
}
